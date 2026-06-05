import { useState, useEffect, useCallback, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import type { Purchases as PurchasesType } from "@revenuecat/purchases-capacitor";

// ─── Configuration ────────────────────────────────────────────────────────────
// RevenueCat entitlement ID — must match exactly what you set in the dashboard
export const IAP_ENTITLEMENT_ID = "premium";

// 🔑 Replace these with your actual API keys from dashboard.revenuecat.com
// iOS  → App Store Connect → RevenueCat dashboard → "iOS" app
// Android → Google Play Console → RevenueCat dashboard → "Android" app
export const RC_API_KEY_IOS = "appl_ZFFfGYGlLGvatHTTNJPmLpVqzqo";
export const RC_API_KEY_ANDROID = "goog_IoPeJBnbRwwSPCWoopVxRqQeItT";
// ─────────────────────────────────────────────────────────────────────────────

export interface IAPState {
  /** Whether the current user owns the premium entitlement */
  hasPremium: boolean;
  /** True while a purchase or restore is in progress */
  isLoading: boolean;
  /** Error message to display to user (null if no error) */
  error: string | null;
  /** Triggers the native purchase sheet for the default offering's first package */
  purchase: () => Promise<void>;
  /** Restores previous purchases (required button on iOS) */
  restore: () => Promise<void>;
  /** Clears the error message */
  clearError: () => void;
}

function getApiKey(): string {
  return Capacitor.getPlatform() === "ios" ? RC_API_KEY_IOS : RC_API_KEY_ANDROID;
}

export function useIAP(): IAPState {
  const [hasPremium, setHasPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const purchasesRef = useRef<typeof PurchasesType | null>(null);

  const checkEntitlement = useCallback(async (Purchases: typeof PurchasesType) => {
    try {
      const { customerInfo } = await Purchases.getCustomerInfo();
      setHasPremium(IAP_ENTITLEMENT_ID in customerInfo.entitlements.active);
    } catch (e) {
      console.warn("[IAP] Could not get customer info:", e);
    }
  }, []);

  useEffect(() => {
    // Skip on web — RevenueCat requires a native Capacitor environment
    if (!Capacitor.isNativePlatform()) return;

    let cancelled = false;

    void (async () => {
      try {
        const { Purchases } = await import("@revenuecat/purchases-capacitor");
        await Purchases.configure({ apiKey: getApiKey() });
        purchasesRef.current = Purchases;
        if (!cancelled) await checkEntitlement(Purchases);
      } catch (e) {
        console.warn("[IAP] Initialisation failed:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [checkEntitlement]);

  const purchase = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) {
      setError("Purchases are only available on mobile devices");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const { Purchases } = await import("@revenuecat/purchases-capacitor");
      const offerings = await Purchases.getOfferings();
      const pkg = offerings.current?.availablePackages?.[0];
      if (!pkg) {
        console.warn("[IAP] No packages available in current offering");
        setError("No products available. Please try again later.");
        return;
      }
      await Purchases.purchasePackage({ aPackage: pkg });
      await checkEntitlement(Purchases);
    } catch (e: unknown) {
      // userCancelled is a normal case — don't show error
      const err = e as { userCancelled?: boolean; message?: string };
      if (!err?.userCancelled) {
        console.error("[IAP] Purchase failed:", e);
        setError(err?.message || "Purchase failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [checkEntitlement]);

  const restore = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) {
      setError("Restore is only available on mobile devices");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const { Purchases } = await import("@revenuecat/purchases-capacitor");
      const { customerInfo } = await Purchases.restorePurchases();
      const hasActivePurchase = IAP_ENTITLEMENT_ID in customerInfo.entitlements.active;
      setHasPremium(hasActivePurchase);
      if (!hasActivePurchase) {
        setError("No previous purchases found");
      }
    } catch (e) {
      console.error("[IAP] Restore failed:", e);
      const err = e as { message?: string };
      setError(err?.message || "Restore failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { hasPremium, isLoading, error, purchase, restore, clearError };
}
