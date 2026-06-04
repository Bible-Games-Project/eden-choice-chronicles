.PHONY: sync-ios sync-android build optimize-images validate-locales export-translations import-translations test-ios-archive test-ios-archive-ci

build:
	npm run build

sync-ios: build
	npx cap sync ios

test-ios-archive:
	@echo "🔨 Building web assets..."
	bun run build
	@echo "📱 Syncing Capacitor iOS..."
	bunx cap sync ios
	@echo "🏗️  Archiving (local signing, no upload)..."
	xcodebuild \
		-project ios/App/App.xcodeproj \
		-scheme App \
		-configuration Release \
		-sdk iphoneos \
		-destination 'generic/platform=iOS' \
		-archivePath /tmp/EdenTest.xcarchive \
		CODE_SIGNING_REQUIRED=NO \
		CODE_SIGNING_ALLOWED=NO \
		archive
	@echo "✅ Archive OK → /tmp/EdenTest.xcarchive"

# Reproduces exact CI flags (no real certs needed to see signing conflict errors)
test-ios-archive-ci:
	@echo "🔨 Building web assets..."
	bun run build
	@echo "📱 Syncing Capacitor iOS..."
	bunx cap sync ios
	@echo "🏗️  Archiving with same flags as CI..."
	xcodebuild \
		-project ios/App/App.xcodeproj \
		-scheme App \
		-configuration Release \
		-sdk iphoneos \
		-destination 'generic/platform=iOS' \
		-archivePath /tmp/EdenTestCI.xcarchive \
		DEVELOPMENT_TEAM=$(shell security find-identity -v -p codesigning | grep "Apple Distribution" | head -1 | awk '{print $$3}' | tr -d '"' | cut -c1-10 || echo "FAKETEAMID") \
		CODE_SIGN_STYLE=Manual \
		CODE_SIGN_IDENTITY="Apple Distribution" \
		archive 2>&1 | grep -E "error:|warning:|ARCHIVE|note:" | head -40
	@echo "✅ Done"

sync-android: build
	npx cap sync android

optimize-images:
	@echo "🖼️  Optimizing images to WebP format..."
	@./optimize-images.sh

validate-locales:
	@echo "🌍 Validating translations..."
	@node scripts/validate-locales.mjs

export-translations:
	@echo "📤 Exporting missing translations..."
	@node scripts/export-missing-translations.mjs

export-translations-csv:
	@echo "📤 Exporting missing translations to CSV..."
	@node scripts/export-missing-translations.mjs --format=csv

export-translations-ui:
	@echo "📤 Exporting UI translations only (common.json)..."
	@node scripts/export-missing-translations.mjs --ui-only

export-translations-batch:
	@echo "📤 Exporting translations in batches of 200..."
	@node scripts/export-missing-translations.mjs --batch-size=200

import-translations:
	@echo "📥 Importing translations..."
	@if [ ! -f "translations-completed.json" ]; then \
		echo "❌ File translations-completed.json not found"; \
		echo "💡 Rename your translated file to translations-completed.json"; \
		exit 1; \
	fi
	@node scripts/import-translations.mjs translations-completed.json
