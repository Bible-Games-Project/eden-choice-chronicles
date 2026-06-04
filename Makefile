.PHONY: sync-ios sync-android build optimize-images validate-locales export-translations import-translations test-ios-archive test-ios-archive-ci

-include .env.local
export

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
	@echo "🔑 Checking ASC API key credentials..."
	@if [ -z "$(APP_STORE_CONNECT_API_KEY_ID)" ]; then echo "❌ Missing APP_STORE_CONNECT_API_KEY_ID in .env.local"; exit 1; fi
	@if [ -z "$(APP_STORE_CONNECT_API_KEY_PATH)" ]; then echo "❌ Missing APP_STORE_CONNECT_API_KEY_PATH in .env.local"; exit 1; fi
	@if [ -z "$(APP_STORE_CONNECT_ISSUER_ID)" ]; then echo "❌ Missing APP_STORE_CONNECT_ISSUER_ID in .env.local"; exit 1; fi
	@if [ ! -f "$(APP_STORE_CONNECT_API_KEY_PATH)" ]; then echo "❌ Key file not found: $(APP_STORE_CONNECT_API_KEY_PATH)"; exit 1; fi
	@mkdir -p $(HOME)/.appstoreconnect/private_keys
	@cp "$(APP_STORE_CONNECT_API_KEY_PATH)" "$(HOME)/.appstoreconnect/private_keys/AuthKey_$(APP_STORE_CONNECT_API_KEY_ID).p8"
	@echo "🏗️  Archiving with same flags as CI..."
	xcodebuild \
		-project ios/App/App.xcodeproj \
		-scheme App \
		-configuration Release \
		-sdk iphoneos \
		-destination 'generic/platform=iOS' \
		-archivePath /tmp/EdenTestCI.xcarchive \
		-allowProvisioningUpdates \
		-authenticationKeyPath "$(HOME)/.appstoreconnect/private_keys/AuthKey_$(APP_STORE_CONNECT_API_KEY_ID).p8" \
		-authenticationKeyID "$(APP_STORE_CONNECT_API_KEY_ID)" \
		-authenticationKeyIssuerID "$(APP_STORE_CONNECT_ISSUER_ID)" \
		DEVELOPMENT_TEAM=N65TK8GHAL \
		CODE_SIGN_STYLE=Automatic \
		archive
	@echo "✅ Archive OK → /tmp/EdenTestCI.xcarchive"

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
