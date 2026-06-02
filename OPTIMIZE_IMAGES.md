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
- ✅ Find all PNG files in `public/`
- ✅ Convert them to WebP format
- ✅ Keep originals (for now)
- ✅ Show you the size savings

Expected result: **532MB → ~100-150MB**

---

## 📝 After Running the Script

### Option A: Update imports to use .webp (recommended)

If your code imports images like:
```typescript
import aaronImage from './assets/aaron-ashamed.png'
```

Change to:
```typescript
import aaronImage from './assets/aaron-ashamed.webp'
```

Or better yet, use a function:
```typescript
// utils/assets.ts
export function getAsset(name: string) {
  return `/assets/${name}.webp`
}
```

### Option B: Fallback with both formats

Keep both formats and let the browser choose:
```html
<picture>
  <source srcset="aaron-ashamed.webp" type="image/webp">
  <img src="aaron-ashamed.png" alt="Aaron">
</picture>
```

---

## 🔄 When to Run This Script

Run `./optimize-images.sh` whenever:
- ✅ You add new PNG character images
- ✅ You add new background images
- ✅ Before creating a release build
- ✅ Monthly (if actively developing)

The script is smart:
- ⚡ Skips files that are already converted and up-to-date
- ⚡ Only converts new or modified PNGs

---

## 🧪 Testing After Optimization

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
