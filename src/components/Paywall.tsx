import { Gem, X, RotateCcw } from "lucide-react";

interface PaywallProps {
  /** Number of free stories the user already played */
  freeLimit: number;
  /** Total stories in the game (for the sales copy) */
  totalStories?: number;
  /** Called when user explicitly dismisses the paywall */
  onClose: () => void;
  onPurchase: () => Promise<void>;
  onRestore: () => Promise<void>;
  isLoading: boolean;
}

export const Paywall = ({
  freeLimit,
  totalStories = 100,
  onClose,
  onPurchase,
  onRestore,
  isLoading,
}: PaywallProps) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm rounded-2xl border border-gold/30 bg-[hsl(25,30%,8%)] shadow-[0_0_60px_hsl(43,75%,25%,0.3)] overflow-hidden">
        {/* Decorative top glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-gold/40 hover:text-gold hover:bg-gold/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="px-6 pt-8 pb-6 text-center">
          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
              <div className="relative p-4 rounded-full bg-gold/15 border border-gold/40">
                <Gem className="w-8 h-8 text-gold" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-display text-2xl md:text-3xl tracking-widest text-gold uppercase mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Unlock Full Journey
          </h2>

          {/* Body */}
          <p className="font-body text-sm text-primary-foreground/60 mb-1 leading-relaxed">
            You've completed the first{" "}
            <span className="text-gold/80">{freeLimit} stories</span> for free.
          </p>
          <p className="font-body text-sm text-primary-foreground/50 mb-7 leading-relaxed">
            Unlock all <span className="text-gold/80">{totalStories}+ stories</span> across
            the Old &amp; New Testament and continue your biblical journey.
          </p>

          {/* Features */}
          <ul className="mb-7 space-y-2 text-left">
            {[
              "All Bible stories — Old & New Testament",
              "Unlimited replays & star rating system",
              "One-time purchase, no subscription",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>
                <span className="font-body text-xs text-primary-foreground/60">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => void onPurchase()}
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-xl bg-gold text-[hsl(25,30%,6%)] font-display tracking-wider uppercase text-sm font-bold hover:bg-gold/90 active:scale-[0.98] disabled:opacity-50 transition-all duration-150 shadow-[0_4px_24px_hsl(43,75%,55%,0.25)] mb-3"
          >
            {isLoading ? "Processing…" : "Unlock Full Game"}
          </button>

          {/* Restore */}
          <button
            onClick={() => void onRestore()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-gold/40 hover:text-gold/70 font-body text-xs tracking-wide transition-colors disabled:opacity-40"
          >
            <RotateCcw className="w-3 h-3" />
            Restore previous purchase
          </button>
        </div>
      </div>
    </div>
  );
};
