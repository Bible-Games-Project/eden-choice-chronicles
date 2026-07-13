import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X, ZoomIn } from "lucide-react";

import { creationSprites } from "@/data/creationSprites";
import { OLD_TESTAMENT_STORIES, NT_JESUS_STORIES, StoryMeta } from "@/data/stories";

interface SpriteEntry {
  story: string;
  scene: string;
  side: "left" | "right";
  src: string;
}

type SpriteConfig = { left?: string; right?: string };
type SpriteRegistry = Record<string, SpriteConfig>;

// Auto-discover every *Sprites.ts module under src/data/stories/
const storyModules = import.meta.glob<Record<string, SpriteRegistry>>(
  "/src/data/stories/*Sprites.ts",
  { eager: true }
);

const ALL_SPRITE_REGISTRIES: Record<string, SpriteRegistry> = {
  creation: creationSprites,
};

for (const [path, mod] of Object.entries(storyModules)) {
  const fileName = path.split("/").pop()!.replace(/\.ts$/, "");
  // Find the exported registry (named like "abrahamSprites")
  const exportKey = Object.keys(mod).find((k) => k.endsWith("Sprites"));
  if (!exportKey) continue;
  const registry = mod[exportKey] as SpriteRegistry;
  // Derive a story id from filename: "abrahamEgyptSprites" -> "abraham-egypt"
  const baseName = fileName.replace(/Sprites$/, "");
  const storyId = baseName.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
  ALL_SPRITE_REGISTRIES[storyId] = registry;
}

function humanize(id: string): string {
  return id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

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
const storyIds = [...new Set(allSprites.map((s) => s.story))].sort();

interface SpriteViewerProps {
  onBack: () => void;
}

const SpriteViewer = ({ onBack }: SpriteViewerProps) => {
  const [filterStory, setFilterStory] = useState<string | null>(null);
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  const filtered = filterStory ? allSprites.filter((s) => s.story === filterStory) : allSprites;

  // Group by story for display
  const grouped = useMemo(() => {
    const map = new Map<string, SpriteEntry[]>();
    for (const s of filtered) {
      if (!map.has(s.story)) map.set(s.story, []);
      map.get(s.story)!.push(s);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,25%,8%)] via-[hsl(30,30%,14%)] to-[hsl(25,20%,6%)]" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
          <button onClick={onBack} className="p-2.5 rounded-xl text-gold hover:bg-gold/10 transition-colors cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="font-display text-2xl tracking-widest uppercase text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Sprite Viewer
            </h2>
            <span className="font-body text-xs text-gold/50">
              {filtered.length} sprites · {storyIds.length} stories
            </span>
          </div>
        </div>

        <div className="px-5 pb-4 flex-shrink-0 space-y-3">
          <select
            value={filterStory ?? ""}
            onChange={(e) => setFilterStory(e.target.value || null)}
            className="w-full sm:w-auto bg-black/40 border border-gold/30 text-gold font-display tracking-wider uppercase text-xs px-3 py-2 rounded-lg cursor-pointer focus:outline-none focus:border-gold/60"
          >
            <option value="">All stories</option>
            {storyIds.map((id) => (
              <option key={id} value={id}>
                {humanize(id)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {grouped.map(([storyId, sprites]) => (
              <section key={storyId}>
                <h3 className="font-display text-sm tracking-widest uppercase text-gold/80 mb-2 px-1 sticky top-0 bg-[hsl(30,30%,14%)]/80 backdrop-blur-sm py-1 z-10">
                  {humanize(storyId)} <span className="text-gold/40">({sprites.length})</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {sprites.map((sprite, i) => (
                    <motion.button
                      key={sprite.src}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: Math.min(i * 0.01, 0.3) }}
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
                      </div>
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5 text-gold/60" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

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
