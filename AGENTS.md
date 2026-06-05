# Agent Instructions for Eden Choice Chronicles (Bible Story Game: Sacred Quest)

## ⚠️ Security - Public Repository

**CRITICAL: This is a PUBLIC GitHub repository**

### Never commit these files:
- ❌ `*.keystore` / `*.jks` - Android signing keys
- ❌ `*.p12` / `*.cer` - iOS certificates  
- ❌ `*.mobileprovision` - iOS provisioning profiles
- ❌ `ExportOptions.plist` - Contains Team ID and provisioning details
- ❌ `google-services.json` / `GoogleService-Info.plist` - Firebase config
- ❌ Any file containing API keys, tokens, passwords, or credentials

### Where credentials belong:
✅ All signing keys, certificates, and credentials are stored in **GitHub Secrets**
✅ CI/CD pipelines (`/.github/workflows/`) inject secrets at build time
✅ Local development uses test/debug keys (not committed)

### Before any commit:
1. Review files for sensitive data
2. Check `.gitignore` is properly configured  
3. Verify no credentials in source code
4. Confirm CI/CD pipeline handles secrets

## Build & Deploy

### iOS/Android Sync
- ❌ NEVER run `make sync-ios` or `make sync-android` automatically
- ✅ Remind user to run sync manually after native or code changes
- ⚠️ Remind user to test on physical device after native changes

### Commands
- `make build` - Build web assets to `./dist`
- `make sync-ios` - Build + Capacitor sync iOS (manual only)
- `make sync-android` - Build + Capacitor sync Android (manual only)

## Project Structure

This is a **Capacitor** app (React + Vite + TypeScript) with:
- Web build output: `./dist`
- iOS project: `/ios`
- Android project: `/android`
- Capacitor config: `capacitor.config.ts`

Deploy workflows are reusable from `Bible-Games-Project/bgp-admin`.

## ⚠️ OFFLINE-FIRST REQUIREMENT

**CRITICAL: This app MUST work 100% offline**

### Asset Policy
- ❌ **NEVER** use CDN/external URLs for assets (images, audio, videos)
- ❌ **NEVER** use `*.asset.json` pointer files that reference external CDNs
- ✅ **ALWAYS** embed all assets directly in the app bundle
- ✅ All assets MUST be in `src/assets/` and imported via Vite

### Audio Files
- **Location**: `src/assets/music/*.mp3` (real MP3 files, NOT `.asset.json` pointers)
- **Import**: Must use Vite's `import.meta.glob` to load from local bundle
- **Rationale**: Users must be able to play without internet connection

### Why Offline-First
1. Biblical content should always be accessible
2. Users may play in areas with poor/no connectivity
3. No data consumption for core gameplay
4. Faster load times (no network requests)

### Exceptions
- ✅ RevenueCat (IAP) requires occasional internet for license validation
- ✅ Analytics/telemetry (if added) can be online-only

### Before committing any asset:
1. Verify the file is in `src/assets/` (not a CDN pointer)
2. Verify imports use relative paths or Vite globs
3. Test that the app works with airplane mode enabled

## Translations Contract

**All user-visible strings MUST live in `src/locales/<lang>/...json`. Never hardcode user-facing text in components.**

### Structure
- `src/locales/en/common.json` — UI strings (source of truth)
- `src/locales/en/scenes/<storyId>.json` — per-story scene strings (source of truth)
- Every other language under `src/locales/<lang>/` MUST mirror the English file tree and key set.

### Supported languages (12)
`en` (source), `es`, `pt-BR`, `fr`, `de`, `it`, `pl`, `ru`, `tr`, `ja`, `ko`, `ar`.

### Rules for adding/changing literals
1. Add the key first in `src/locales/en/...` (source of truth).
2. Add the SAME key in ALL other 11 languages in the same change. If a real translation is not yet available, use a placeholder prefixed with `[TODO:<lang>]` (e.g. `"[TODO:ar] Settings"`). Never leave the key missing.
3. Never remove a key from `en/` without removing it from every other language in the same change.
4. Run `node scripts/validate-locales.mjs` before committing. It exits non-zero on any missing/extra key or file.

### Validation
- Script: `scripts/validate-locales.mjs`
- Compares every locale against `en/`. Reports missing files, missing keys, and extra keys.
- Intended to run in CI and locally before commits.
