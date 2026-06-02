#!/bin/bash
set -euo pipefail

# Script to optimize PNG images to WebP format
# Run this periodically when you add new assets to the project

echo "🖼️  Eden Choice Chronicles - Image Optimizer"
echo "============================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}❌ cwebp not found${NC}"
    echo ""
    echo "Install it with:"
    echo "  macOS: brew install webp"
    echo "  Ubuntu: sudo apt-get install webp"
    echo ""
    exit 1
fi

# Configuration
SOURCE_DIR="src/assets"  # Source images directory
QUALITY=85               # WebP quality (0-100, 85 is good balance)
BACKUP_ORIGINALS=true

# Stats
total_files=0
converted_files=0
skipped_files=0
original_size=0
new_size=0

echo "📂 Scanning for PNG files in ${SOURCE_DIR}..."
echo ""

# Find all PNGs and convert to WebP
while IFS= read -r -d '' png_file; do
    ((total_files++))
    
    # Get file size before conversion
    file_size=$(stat -f%z "$png_file" 2>/dev/null || stat -c%s "$png_file" 2>/dev/null)
    original_size=$((original_size + file_size))
    
    # Generate WebP filename
    webp_file="${png_file%.png}.webp"
    
    # Skip if WebP already exists and is newer
    if [ -f "$webp_file" ] && [ "$webp_file" -nt "$png_file" ]; then
        echo -e "${YELLOW}⏭️  Skipping${NC} $(basename "$png_file") (WebP already exists and is newer)"
        ((skipped_files++))
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        new_size=$((new_size + webp_size))
        continue
    fi
    
    # Convert to WebP
    echo -e "${GREEN}🔄 Converting${NC} $(basename "$png_file")..."
    if cwebp -q $QUALITY "$png_file" -o "$webp_file" > /dev/null 2>&1; then
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        new_size=$((new_size + webp_size))
        reduction=$((100 - (webp_size * 100 / file_size)))
        echo -e "   ${GREEN}✅${NC} $(numfmt --to=iec $file_size) → $(numfmt --to=iec $webp_size) (${reduction}% smaller)"
        ((converted_files++))
        
        # Optionally backup or remove original
        if [ "$BACKUP_ORIGINALS" = true ]; then
            # Keep original PNG for now
            :
        else
            # Uncomment to remove original PNGs after conversion
            # rm "$png_file"
            :
        fi
    else
        echo -e "   ${RED}❌ Failed${NC}"
    fi
    
done < <(find "$SOURCE_DIR" -type f -name "*.png" -print0)

echo ""
echo "============================================"
echo "📊 OPTIMIZATION SUMMARY"
echo "============================================"
echo ""
echo "Total PNG files found:    $total_files"
echo "Converted:                $converted_files"
echo "Skipped (already fresh):  $skipped_files"
echo ""
echo "Original size:            $(numfmt --to=iec $original_size)"
echo "Optimized size:           $(numfmt --to=iec $new_size)"

if [ $original_size -gt 0 ]; then
    reduction=$((100 - (new_size * 100 / original_size)))
    saved=$((original_size - new_size))
    echo "Space saved:              $(numfmt --to=iec $saved) (${reduction}%)"
fi

echo ""
echo -e "${GREEN}✅ Optimization complete!${NC}"
echo ""
echo "💡 Next steps:"
echo "   1. Update your code to use .webp instead of .png"
echo "   2. Test in the app to ensure images display correctly"
echo "   3. If everything works, you can remove original PNGs"
echo ""
