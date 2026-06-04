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
  /** Triggers the native purchase sheet for the default offering's first package */
  purchase: () => Promise<void>;
  /** Restores previous purchases (required button on iOS) */
  restore: () => Promise<void>;
}

function getApiKey(): string {
  return Capacitor.getPlatform() === "ios" ? RC_API_KEY_IOS : RC_API_KEY_ANDROID;
}

export function useIAP(): IAPState {
  const [hasPremium, setHasPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (!Capacitor.isNativePlatform()) return;
    setIsLoading(true);
    try {
      const { Purchases } = await import("@revenuecat/purchases-capacitor");
      const offerings = await Purchases.getOfferings();
      const pkg = offerings.current?.availablePackages?.[0];
      if (!pkg) {
        console.warn("[IAP] No packages available in current offering");
        return;
      }
      await Purchases.purchasePackage({ aPackage: pkg });
      await checkEntitlement(Purchases);
    } catch (e: unknown) {
      // userCancelled is a normal case — don't log it as an error
      const err = e as { userCancelled?: boolean };
      if (!err?.userCancelled) {
        console.error("[IAP] Purchase failed:", e);
      }
    } finally {
      setIsLoading(false);
    }
  }, [checkEntitlement]);

  const restore = useCallback(async () => {
    if (!Capacitor.isNativePlatform()) return;
    setIsLoading(true);
    try {
      const { Purchases } = await import("@revenuecat/purchases-capacitor");
      const { customerInfo } = await Purchases.restorePurchases();
      setHasPremium(IAP_ENTITLEMENT_ID in customerInfo.entitlements.active);
    } catch (e) {
      console.error("[IAP] Restore failed:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { hasPremium, isLoading, purchase, restore };
}
