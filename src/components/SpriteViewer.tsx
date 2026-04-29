import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X, ZoomIn } from "lucide-react";

import { creationSprites } from "@/data/creationSprites";
import { adamEveSprites } from "@/data/stories/adamEveSprites";
import { cainAbelSprites } from "@/data/stories/cainAbelSprites";
import { noahSprites } from "@/data/stories/noahSprites";
import { babelSprites } from "@/data/stories/babelSprites";
import { abrahamSprites } from "@/data/stories/abrahamSprites";
import { abrahamEgyptSprites } from "@/data/stories/abrahamEgyptSprites";
import { abrahamLotSprites } from "@/data/stories/abrahamLotSprites";
import { sodomSprites } from "@/data/stories/sodomSprites";
import { sacrificeIsaacSprites } from "@/data/stories/sacrificeIsaacSprites";
import { rebekahSprites } from "@/data/stories/rebekahSprites";
import { jacobEsauSprites } from "@/data/stories/jacobEsauSprites";
import { jacobsDreamSprites } from "@/data/stories/jacobsDreamSprites";
import { jacobWrestlesSprites } from "@/data/stories/jacobWrestlesSprites";
import { josephSoldSprites } from "@/data/stories/josephSoldSprites";
import { josephPotipharSprites } from "@/data/stories/josephPotipharSprites";
import { josephPrisonSprites } from "@/data/stories/josephPrisonSprites";
import { josephDreamsSprites } from "@/data/stories/josephDreamsSprites";
import { josephBrothersEgyptSprites } from "@/data/stories/josephBrothersEgyptSprites";
import { josephReconcilesSprites } from "@/data/stories/josephReconcilesSprites";
import { birthMosesSprites } from "@/data/stories/birthMosesSprites";

interface SpriteEntry {
  story: string;
  scene: string;
  side: "left" | "right";
  src: string;
}

const STORY_LABELS: Record<string, string> = {
  creation: "Creation",
  "adam-eve": "Adam & Eve",
  "cain-abel": "Cain & Abel",
  "noah-flood": "Noah's Flood",
  "tower-babel": "Tower of Babel",
  "call-abraham": "Call of Abraham",
  "abraham-egypt": "Abraham in Egypt",
  "abraham-lot": "Abraham & Lot",
  "sodom-gomorrah": "Sodom & Gomorrah",
  "sacrifice-isaac": "Sacrifice of Isaac",
  "rebekah-servant": "Rebekah & the Servant",
  "jacob-esau": "Jacob & Esau",
  "jacobs-dream": "Jacob's Dream",
  "jacob-wrestles": "Jacob Wrestles the Angel",
  "joseph-sold": "Joseph Sold by His Brothers",
  "joseph-potiphar": "Joseph in Potiphar's House",
  "joseph-prison": "Joseph in Prison",
  "joseph-dreams": "Joseph Interprets Dreams",
  "joseph-brothers-egypt": "Joseph & Brothers in Egypt",
  "joseph-reconciles": "Joseph Reconciles with His Brothers",
  "birth-moses": "Birth of Moses",
};

const ALL_SPRITE_REGISTRIES: Record<string, Record<string, { left?: string; right?: string }>> = {
  creation: creationSprites,
  "adam-eve": adamEveSprites,
  "cain-abel": cainAbelSprites,
  "noah-flood": noahSprites,
  "tower-babel": babelSprites,
  "call-abraham": abrahamSprites,
  "abraham-egypt": abrahamEgyptSprites,
  "abraham-lot": abrahamLotSprites,
  "sodom-gomorrah": sodomSprites,
  "sacrifice-isaac": sacrificeIsaacSprites,
  "rebekah-servant": rebekahSprites,
  "jacob-esau": jacobEsauSprites,
  "jacobs-dream": jacobsDreamSprites,
  "jacob-wrestles": jacobWrestlesSprites,
  "joseph-sold": josephSoldSprites,
  "joseph-potiphar": josephPotipharSprites,
  "joseph-prison": josephPrisonSprites,
  "joseph-dreams": josephDreamsSprites,
  "joseph-brothers-egypt": josephBrothersEgyptSprites,
  "joseph-reconciles": josephReconcilesSprites,
  "birth-moses": birthMosesSprites,
};

function buildSpriteList(): SpriteEntry[] {
  const entries: SpriteEntry[] = [];
  const seen = new Set<string>();

  for (const [storyId, scenes] of Object.entries(ALL_SPRITE_REGISTRIES)) {
    for (const [sceneId, config] of Object.entries(scenes)) {
      if (config.left && !seen.has(config.left)) {
        seen.add(config.left);
        entries.push({ story: storyId, scene: sceneId, side: "left", src: config.left });
      }
      if (config.right && !seen.has(config.right)) {
        seen.add(config.right);
        entries.push({ story: storyId, scene: sceneId, side: "right", src: config.right });
      }
    }
  }

  return entries;
}

const allSprites = buildSpriteList();
const storyIds = [...new Set(allSprites.map((s) => s.story))];

interface SpriteViewerProps {
  onBack: () => void;
}

const SpriteViewer = ({ onBack }: SpriteViewerProps) => {
  const [filterStory, setFilterStory] = useState<string | null>(null);
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  const filtered = filterStory ? allSprites.filter((s) => s.story === filterStory) : allSprites;

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,25%,8%)] via-[hsl(30,30%,14%)] to-[hsl(25,20%,6%)]" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
          <button onClick={onBack} className="p-2.5 rounded-xl text-gold hover:bg-gold/10 transition-colors cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="font-display text-2xl tracking-widest uppercase text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Sprite Viewer
            </h2>
            <span className="font-body text-xs text-gold/50">{filtered.length} sprites</span>
          </div>
        </div>

        {/* Story selector dropdown + filter tabs */}
        <div className="px-5 pb-4 flex-shrink-0 space-y-3">
          <select
            value={filterStory ?? ""}
            onChange={(e) => setFilterStory(e.target.value || null)}
            className="w-full sm:w-auto bg-black/40 border border-gold/30 text-gold font-display tracking-wider uppercase text-xs px-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:border-gold/60"
          >
            <option value="">All stories</option>
            {storyIds.map((id) => (
              <option key={id} value={id}>
                {STORY_LABELS[id] || id}
              </option>
            ))}
          </select>
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setFilterStory(null)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-display tracking-wider uppercase transition-all cursor-pointer ${
                filterStory === null ? "bg-gold/30 text-gold border border-gold/50" : "bg-black/30 text-primary-foreground/50 border border-primary-foreground/10 hover:bg-gold/10"
              }`}
            >
              All
            </button>
            {storyIds.map((id) => (
              <button
                key={id}
                onClick={() => setFilterStory(id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-display tracking-wider uppercase transition-all cursor-pointer ${
                  filterStory === id ? "bg-gold/30 text-gold border border-gold/50" : "bg-black/30 text-primary-foreground/50 border border-primary-foreground/10 hover:bg-gold/10"
                }`}
              >
                {STORY_LABELS[id] || id}
              </button>
            ))}
          </div>
        </div>

        {/* Sprite grid */}
        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {filtered.map((sprite, i) => (
              <motion.button
                key={sprite.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.02, 0.5) }}
                onClick={() => setZoomedSrc(sprite.src)}
                className="group relative aspect-square rounded-xl border border-primary-foreground/10 bg-black/30 overflow-hidden cursor-pointer hover:border-gold/40 transition-all"
              >
                <img
                  src={sprite.src}
                  alt={`${sprite.scene} (${sprite.side})`}
                  className="w-full h-full object-contain p-1"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] text-gold/80 truncate font-body">{sprite.scene}</p>
                  <p className="text-[9px] text-primary-foreground/40 truncate">{STORY_LABELS[sprite.story]}</p>
                </div>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-gold/60" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom overlay */}
      <AnimatePresence>
        {zoomedSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-pointer"
            onClick={() => setZoomedSrc(null)}
          >
            <button
              onClick={() => setZoomedSrc(null)}
              className="absolute top-4 right-4 p-2 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomedSrc}
              alt="Zoomed sprite"
              className="max-w-[90vw] max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpriteViewer;
