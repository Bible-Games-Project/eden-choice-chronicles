import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2 } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import { LANGUAGES, LanguageCode } from "@/lib/i18n";

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ open, onClose }: SettingsPanelProps) => {
  const { volume, setVolume, language, setLanguage, t } = useSettings();
  const isRTL = language === "ar";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl border border-gold/30 bg-[hsl(25,25%,10%)] shadow-[0_0_40px_hsl(43,75%,55%,0.15)]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
              <h2 className="font-display text-lg tracking-[0.2em] uppercase text-gold">
                {t("settings")}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("close")}
                className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-5 flex flex-col gap-6 max-h-[70vh] overflow-y-auto">
              {/* Volume */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="settings-volume"
                    className="font-display text-xs tracking-[0.18em] uppercase text-gold/80 flex items-center gap-2"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    {t("volume")}
                  </label>
                  <span className="font-body text-sm text-primary-foreground/70 tabular-nums">
                    {volume}
                  </span>
                </div>
                <input
                  id="settings-volume"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-gold cursor-pointer"
                />
              </div>

              {/* Language */}
              <div>
                <label className="font-display text-xs tracking-[0.18em] uppercase text-gold/80 mb-2 block">
                  {t("language")}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => {
                    const active = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => setLanguage(lang.code as LanguageCode)}
                        className={`px-3 py-2 rounded-lg border text-left transition cursor-pointer ${
                          active
                            ? "border-gold/60 bg-gold/15 text-gold"
                            : "border-primary-foreground/10 bg-black/30 text-primary-foreground/70 hover:border-gold/30 hover:bg-black/40"
                        }`}
                      >
                        <div className="font-body text-sm leading-tight">{lang.native}</div>
                        <div className="font-body text-[10px] text-primary-foreground/40 leading-tight">
                          {lang.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;
