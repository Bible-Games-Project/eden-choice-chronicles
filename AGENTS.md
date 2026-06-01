# Agent Instructions for Eden Choice Chronicles

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
