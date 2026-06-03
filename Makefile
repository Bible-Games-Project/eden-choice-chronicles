.PHONY: sync-ios sync-android build optimize-images validate-locales export-translations import-translations

build:
	npm run build

sync-ios: build
	npx cap sync ios

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

import-translations:
	@echo "📥 Importing translations..."
	@if [ ! -f "translations-completed.json" ]; then \
		echo "❌ File translations-completed.json not found"; \
		echo "💡 Rename your translated file to translations-completed.json"; \
		exit 1; \
	fi
	@node scripts/import-translations.mjs translations-completed.json
