.PHONY: sync-ios sync-android build optimize-images validate-locales

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
