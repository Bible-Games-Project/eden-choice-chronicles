#!/usr/bin/env bun
// Generates waist-up character sprites with the OpenAI Images API, using
// reference images (art style + recurring characters) for consistency.
//
// Usage:
//   bun scripts/sprite-gen/generate.mjs <jobs.json> [--only name1,name2] [--quality medium]
//
// jobs.json: { "jobs": [ { "out": "src/assets/sprites/x/y.png", "refs": ["style-icon", "jesus"], "prompt": "..." } ] }
// "refs" are file names (without .png) inside scripts/sprite-gen/refs/.
// Each job writes the PNG and a matching .webp next to it.
//
// Needs OPENAI_API_KEY in the environment (never commit it) and the `sharp`
// package resolvable from SHARP_DIR (e.g. install it in /tmp: `npm i sharp`).
// Must run with bun: bun's fetch honours the HTTPS_PROXY of the build sandbox.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const ROOT = resolve(import.meta.dir, "../..");
const REFS = join(import.meta.dir, "refs");
const MODEL = process.env.SPRITE_MODEL || "gpt-image-1.5";

// USD per 1M tokens for gpt-image-1.5 (used only for the cost estimate printed).
const PRICE = { textIn: 5, imageIn: 8, imageOut: 32 };

const args = process.argv.slice(2);
const jobsFile = args[0];
const only = args.includes("--only") ? args[args.indexOf("--only") + 1].split(",") : null;
const quality = args.includes("--quality") ? args[args.indexOf("--quality") + 1] : "medium";

if (!jobsFile || !process.env.OPENAI_API_KEY) {
  console.error("Usage: bun scripts/sprite-gen/generate.mjs <jobs.json>  (needs OPENAI_API_KEY)");
  process.exit(1);
}

const require = createRequire(join(process.env.SHARP_DIR || ROOT, "noop.js"));
const sharp = require("sharp");

const STYLE = readFileSync(join(import.meta.dir, "style.txt"), "utf8").trim();
const { jobs } = JSON.parse(readFileSync(jobsFile, "utf8"));

let totalCost = 0;

async function run(job) {
  const name = job.out.split("/").pop().replace(".png", "");
  const form = new FormData();
  form.append("model", MODEL);
  // Recurring characters: refs/<name>.txt holds a fixed description that is
  // added to every prompt using that reference, so the face stays the same.
  const characters = job.refs
    .filter((r) => existsSync(join(REFS, `${r}.txt`)))
    .map((r) => readFileSync(join(REFS, `${r}.txt`), "utf8").trim())
    .join("\n");
  form.append("prompt", `${STYLE}\n\n${characters ? `CHARACTERS (identical to the reference image):\n${characters}\n\n` : ""}SCENE:\n${job.prompt}`);
  form.append("size", "1024x1024");
  form.append("quality", quality);
  form.append("background", "transparent");
  form.append("output_format", "png");
  form.append("input_fidelity", process.env.SPRITE_FIDELITY || "low");
  for (const ref of job.refs) {
    const p = join(REFS, `${ref}.png`);
    if (!existsSync(p)) throw new Error(`Missing reference ${p}`);
    form.append("image[]", new Blob([readFileSync(p)], { type: "image/png" }), `${ref}.png`);
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: form,
    });
    const json = await res.json();
    if (!res.ok) {
      console.error(`${name}: attempt ${attempt} failed: ${json.error?.message}`);
      if (attempt === 3) throw new Error(json.error?.message);
      continue;
    }
    const u = json.usage || {};
    const d = u.input_tokens_details || {};
    const cost =
      ((d.text_tokens || 0) * PRICE.textIn + (d.image_tokens || 0) * PRICE.imageIn + (u.output_tokens || 0) * PRICE.imageOut) / 1e6;
    totalCost += cost;
    const png = Buffer.from(json.data[0].b64_json, "base64");
    const outPng = join(ROOT, job.out);
    writeFileSync(outPng, png);
    if (job.out.startsWith("src/")) await sharp(png).webp({ quality: 82 }).toFile(outPng.replace(/\.png$/, ".webp"));
    console.log(`${name}: ok  ~$${cost.toFixed(3)}  (text ${d.text_tokens}, img in ${d.image_tokens}, out ${u.output_tokens})`);
    return;
  }
}

const todo = jobs.filter((j) => !only || only.some((o) => j.out.includes(o)));
// Small batches in parallel to stay within rate limits.
for (let i = 0; i < todo.length; i += 4) {
  await Promise.all(todo.slice(i, i + 4).map((j) => run(j).catch((e) => console.error(`${j.out}: ${e.message}`))));
}
console.log(`Estimated cost: ~$${totalCost.toFixed(2)} (${MODEL}, ${quality})`);
