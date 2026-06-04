import { motion } from "framer-motion";
import { useSettings } from "@/hooks/useSettings";
import type { TranslationKey } from "@/lib/i18n";

interface NarrativeScreenProps {
  title: string;
  body: string;
  authors?: string;
  cta?: string;
  buttonLabelKey?: string;
  onContinue: () => void;
}

const NarrativeScreen = ({
  title,
  body,
  authors,
  cta,
  buttonLabelKey = "continue",
  onContinue,
}: NarrativeScreenProps) => {
  const { t } = useSettings();

  return (
    <div
      className="fixed inset-0 overflow-hidden flex items-center justify-center px-6"
      style={{ backgroundColor: "hsl(var(--scene-base))" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="max-w-xl w-full text-center flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-12 bg-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
          <div className="h-px w-12 bg-gold/40" />
        </div>

        <h1 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase text-gold mb-6">
          {title}
        </h1>

        <div className="space-y-3 mb-6">
          {body.split("\n").filter((l) => l.length > 0).map((line, i) => (
            <p
              key={i}
              className="font-body italic text-primary-foreground/90 text-base md:text-lg leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        {authors && (
          <div className="mb-6">
            {authors.split("\n").filter((l) => l.length > 0).map((line, i) => (
              <p
                key={i}
                className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-gold/85"
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {cta && (
          <p className="font-body text-sm text-primary-foreground/70 mb-6 italic">
            {cta}
          </p>
        )}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={onContinue}
          className="font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/40 text-gold hover:bg-gold/15 hover:border-gold transition-colors px-8 py-3 cursor-pointer"
        >
          {t(buttonLabelKey)}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NarrativeScreen;
