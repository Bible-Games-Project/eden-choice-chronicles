.PHONY: sync-ios sync-android build

build:
	npm run build

sync-ios: build
	npx cap sync ios

sync-android: build
	npx cap sync android
