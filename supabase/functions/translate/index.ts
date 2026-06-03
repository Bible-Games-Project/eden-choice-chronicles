// Translates an array of source English strings into a target language.
// Uses the Lovable AI Gateway (no user API key required).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANG_NAMES: Record<string, string> = {
  es: "Spanish (Spain)",
  "pt-BR": "Brazilian Portuguese",
  fr: "French",
  de: "German",
  it: "Italian",
  pl: "Polish",
  ru: "Russian",
  tr: "Turkish",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { texts, targetLang } = await req.json();

    if (!Array.isArray(texts) || texts.length === 0 || typeof targetLang !== "string") {
      return json({ error: "Invalid request: { texts: string[], targetLang: string } required" }, 400);
    }

    // English passthrough (shouldn't reach here, but safe).
    if (targetLang === "en" || !LANG_NAMES[targetLang]) {
      return json({ translations: texts });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return json({ error: "LOVABLE_API_KEY not configured" }, 500);
    }

    const langName = LANG_NAMES[targetLang];

    const system = [
      `You translate short narrative game text from English into ${langName}.`,
      "Preserve meaning, tone, line breaks (\\n), punctuation, quotation marks, and biblical reverence.",
      "Do not add notes, explanations, or quotes around the output.",
      'Respond ONLY with JSON: {"translations":[ ... ]} — same length and order as input.',
    ].join(" ");

    const userPayload = JSON.stringify({ texts });

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: system },
          { role: "user", content: userPayload },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      if (r.status === 429) return json({ error: "rate-limited" }, 429);
      if (r.status === 402) return json({ error: "credits-exhausted" }, 402);
      return json({ error: `gateway: ${txt}` }, 500);
    }

    const j = await r.json();
    const content = j?.choices?.[0]?.message?.content ?? "{}";

    let translations: string[] = [];
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed.translations)) {
        translations = parsed.translations.map((s: unknown, i: number) =>
          typeof s === "string" ? s : texts[i],
        );
      }
    } catch {
      translations = texts;
    }

    // Ensure exact length match.
    if (translations.length !== texts.length) {
      const fixed = texts.map((t: string, i: number) => translations[i] ?? t);
      translations = fixed;
    }

    return json({ translations });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
