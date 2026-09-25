<!-- BGP-ADMIN:BEGIN -->
<!-- Managed by bgp-admin (templates/agent-docs). Edits inside this block are overwritten on the next sync. Add project-specific notes below the END marker. -->

# AGENTS.md

Instructions for AI coding agents working on this repository.

This repo is a **web game**. It is published as an iOS/Android app by a separate
control plane called **bgp-admin** — see "Native boundary" below, it is the rule
that matters most here.

Read also:

- [docs/agents/working-style.md](./docs/agents/working-style.md) — how the maintainer likes to work

## Native boundary

bgp-admin owns everything native. It generates the Capacitor setup, the signing
config and the release workflows from outside this repo, without modifying it.

**Never add or edit any of the following here:**

- `capacitor.config.*`, `ios/`, `android/`
- Capacitor or native plugin dependencies in `package.json`
- `.github/workflows/deploy*.yml`, `.github/workflows/preview-deploy.yml`
- Build config (`vite.config.*`, router config, base paths) changed *for the sake
  of the mobile build*

If something only breaks inside the app shell — blank screen in the WebView,
asset paths, deep links, splash screen, versioning, signing — the fix belongs in
bgp-admin, not here. Say so instead of patching around it. A local fix will be
silently overwritten on the next sync and will hide the real bug.

Normal web work (game logic, UI, assets, web build config for web reasons) is
entirely yours.

## Language

Everything you write into the repository MUST be in English:

- Source code (variables, functions, classes, file names)
- Comments of any kind
- Documentation, README files, guides
- Commit messages, branch names, PR and issue titles and descriptions
- Log messages and error messages
- Tests (descriptions, assertions, fixtures)
- Comments inside config files (YAML, JSON, TOML)
- Database schemas and API route names

Only end-user-facing content may be localized: UI strings in i18n files, store
listings, and marketing copy.

The maintainer communicates in Spanish. You may reply in Spanish in
conversation, but anything committed to the repository stays in English.

## Keeping this file current

At the end of a working session, update `AGENTS.md` with everything important
you learned that day. Worth recording:

- Conventions and patterns of this codebase that were not obvious up front
- Commands that actually work (build, test, lint, run) and their gotchas
- Decisions the maintainer made, and the reasoning behind them
- Traps you fell into, so the next agent does not repeat them

Do not record what the code already says, one-off details of a single task, or a
changelog of what you did. This file is for what the next agent needs to know
before starting, nothing else. Keep it edited down — replace stale entries
instead of appending to them.

Write project-specific notes **below the `BGP-ADMIN:END` marker**. Anything
inside the managed block is shared across all game repos and gets overwritten on
the next sync; if a rule you are adding applies to every game, it belongs in
bgp-admin at `templates/agent-docs/`, so ask before adding it.

<!-- BGP-ADMIN:END -->

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
