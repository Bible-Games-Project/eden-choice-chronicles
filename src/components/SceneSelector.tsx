import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StoryScene } from "@/data/stories/creation";

interface SceneSelectorProps {
  scenes: Record<string, StoryScene>;
  currentSceneId: string;
  onSelectScene: (sceneId: string) => void;
  onClose: () => void;
}

const SceneSelector = ({ scenes, currentSceneId, onSelectScene, onClose }: SceneSelectorProps) => {
  const sceneIds = Object.keys(scenes);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-black/85 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[hsl(25,25%,12%)] border border-gold/30 rounded-2xl max-w-md w-[90vw] max-h-[70vh] overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gold/15">
            <h3 className="font-display text-sm tracking-widest uppercase text-gold">Scene Selector</h3>
            <button onClick={onClose} className="p-1.5 text-primary-foreground/50 hover:text-primary-foreground cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex flex-col gap-1.5">
              {sceneIds.map((id) => {
                const scene = scenes[id];
                const isCurrent = id === currentSceneId;
                return (
                  <button
                    key={id}
                    onClick={() => { onSelectScene(id); onClose(); }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border transition-all cursor-pointer ${
                      isCurrent
                        ? "border-gold/50 bg-gold/20 text-gold"
                        : "border-primary-foreground/10 bg-black/20 text-primary-foreground/70 hover:bg-gold/10 hover:border-gold/30 hover:text-gold"
                    }`}
                  >
                    <span className="font-display text-xs tracking-wider block">{scene.title}</span>
                    <span className="font-body text-[10px] text-primary-foreground/40 block mt-0.5">{id}{scene.isFinal ? " (final)" : ""}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneSelector;
