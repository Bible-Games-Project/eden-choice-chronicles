# 🖼️ Image Optimization Guide

## Problem
The app bundle is currently **532MB**, with 471MB (88.5%) being PNG character images. Google Play Console rejects bundles over 500MB.

## Solution
Convert PNGs to WebP format, which reduces file size by **70-90%** while maintaining quality.

---

## 🚀 Quick Start

### 1. Install WebP tools (one-time setup)

```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp
```

### 2. Run the optimization script

```bash
./optimize-images.sh
```

This will:
- ✅ Find all PNG files in `src/assets/`
- ✅ Convert them to WebP format
- ✅ **Automatically update all code references** (.ts/.tsx files)
- ✅ Keep original PNGs (for safety)
- ✅ Show you the size savings

Expected result: **532MB → ~100-150MB**

### 3. Configuration (optional)

Edit `optimize-images.sh` to customize:

```bash
UPDATE_CODE_REFS=true    # Auto-update imports (recommended)
DELETE_ORIGINALS=false   # Delete PNGs after conversion (set to true when confident)
QUALITY=85               # WebP quality (0-100)
```

---

## 📝 What the Script Does

The script is **fully automated** and handles everything:

1. **Converts PNG → WebP** with optimal quality settings
2. **Updates your code automatically** - replaces `.png"` with `.webp"` in all .ts/.tsx files
3. **Smart detection** - skips files already converted
4. **Safe by default** - keeps original PNGs until you're confident

---

## 🧪 After Running the Script

### Test everything works:

1. **Build the app:**
   ```bash
   bun run build
   ```

2. **Check the size:**
   ```bash
   du -sh dist/
   # Should be ~100-150MB instead of 532MB
   ```

3. **Test in the app:**
   - Launch the app and verify images load correctly
   - Check different scenes and characters
   - If everything works, set `DELETE_ORIGINALS=true` and re-run

4. **Sync to native platforms:**
   ```bash
   make sync-android
   make sync-ios
   ```

5. **Build release:**
   ```bash
   make build-android-release
   ```
   The AAB should now be ~100-150MB instead of 532MB! 🎉

---

## 🔄 When to Run This Script

Run `./optimize-images.sh` whenever:
- ✅ You add new PNG character images
- ✅ You add new background images  
- ✅ Before creating a release build
- ✅ Monthly (if actively developing)

The script is intelligent:
- ⚡ Skips files already converted
- ⚡ Only updates code if new conversions happened
- ⚡ Won't break anything - original PNGs are kept by default

---

## ⚙️ Advanced Configuration

### Manual Code Update (if UPDATE_CODE_REFS=false)

If you prefer to update imports manually:

```bash
# Find all .png references
grep -r "\.png\"" src/

# Replace all at once (macOS)
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' 's/\.png"/\.webp"/g' {} \;
```

### Cleanup Original PNGs

Once you've tested and everything works:

```bash
# Set in script
DELETE_ORIGINALS=true

# Or manually
find src/assets -type f -name "*.png" -delete
```

---

## 🐛 Troubleshooting
   - If everything works, set `DELETE_ORIGINALS=true` and re-run
   - Run locally: `bun run dev`
   - Verify images display correctly
   - Check transparency works (WebP supports it)

4. **Build Android:**
   ```bash
   bunx cap sync android
   cd android && ./gradlew bundleRelease
   ```
   The AAB should now be under 500MB.

---

## 🗑️ Removing Original PNGs (optional)

Once you've verified everything works with WebP:

```bash
# Remove all original PNGs (be careful!)
find public -name "*.png" -type f -delete
```

⚠️ **Only do this after:**
- ✅ Testing thoroughly
- ✅ Confirming WebP images work
- ✅ Committing your code changes
- ✅ Having a backup

---

## 📊 Expected Results

**Before optimization:**
- 778 PNGs = 471 MB
- 595 JPGs = 56 MB
- **Total: 532 MB**

**After optimization:**
- 778 WebPs = ~70-100 MB
- 595 JPGs = 56 MB
- **Total: ~130-160 MB** ✅

**AAB size reduction:**
- Before: >500 MB (rejected)
- After: <200 MB (accepted) ✅

---

## 🆘 Troubleshooting

### "cwebp: command not found"
Install WebP tools:
```bash
brew install webp
```

### Images not displaying
Check your import paths - make sure they use `.webp` extension:
```typescript
// ❌ Wrong
import img from './aaron.png'

// ✅ Correct
import img from './aaron.webp'
```

### Bundle still too large
1. Check if both .png and .webp files are being bundled
2. Remove original .png files after verification
3. Run `bun run build` again
4. Check `dist/assets/` to verify only .webp files exist

---

## 💡 Tips

- **Quality setting:** The script uses quality=85 (good balance). You can adjust this in the script if needed (50-100)
- **Batch processing:** The script handles all images at once - no need to convert manually
- **Git:** Consider adding a pre-commit hook to auto-optimize new images
- **CI/CD:** You can add this script to your build pipeline

---

## 📚 Additional Resources

- [WebP official docs](https://developers.google.com/speed/webp)
- [Can I use WebP?](https://caniuse.com/webp) (99%+ browser support)
- [WebP vs PNG comparison](https://developers.google.com/speed/webp/docs/webp_study)
