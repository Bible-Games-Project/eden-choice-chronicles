#!/bin/bash
set -o pipefail

# Script to optimize PNG images to WebP format
# Run this periodically when you add new assets to the project

echo "🖼️  Bible Story Game: Sacred Quest - Image Optimizer"
echo "============================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Human readable file size function (macOS compatible)
human_size() {
    local bytes=$1
    if [ $bytes -lt 1024 ]; then
        echo "${bytes}B"
    elif [ $bytes -lt 1048576 ]; then
        echo "$(( bytes / 1024 ))KB"
    else
        echo "$(( bytes / 1048576 ))MB"
    fi
}

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
SOURCE_DIR="src/assets"        # Source images directory
QUALITY=85                     # WebP quality (0-100, 85 is good balance)
UPDATE_CODE_REFS=true          # Automatically update .ts/.tsx imports
DELETE_ORIGINALS=false         # Delete PNG files after successful conversion
CODE_DIRS="src"                # Directories to search for code references

# Stats
total_files=0
converted_files=0
skipped_files=0
original_size=0
new_size=0
code_files_updated=0

echo "📂 Scanning for PNG files in ${SOURCE_DIR}..."
echo ""

# Find all PNGs and convert to WebP
while IFS= read -r -d '' png_file; do
    total_files=$((total_files + 1))
    
    # Get file size before conversion
    if [[ "$OSTYPE" == "darwin"* ]]; then
        file_size=$(stat -f%z "$png_file" 2>/dev/null || echo "0")
    else
        file_size=$(stat -c%s "$png_file" 2>/dev/null || echo "0")
    fi
    original_size=$((original_size + file_size))
    
    # Generate WebP filename
    webp_file="${png_file%.png}.webp"
    
    # Skip if WebP already exists and has valid size
    # (Don't use file timestamps - they're unreliable in CI/Git)
    if [ -f "$webp_file" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || echo "0")
        else
            webp_size=$(stat -c%s "$webp_file" 2>/dev/null || echo "0")
        fi
        
        # Skip if WebP exists and has reasonable size (not corrupted)
        if [ "$webp_size" -gt 100 ]; then
            echo -e "${YELLOW}⏭️  Skipping${NC} $(basename "$png_file") (WebP already exists: $(human_size $webp_size))"
            skipped_files=$((skipped_files + 1))
            new_size=$((new_size + webp_size))
            continue
        fi
    fi
    
    # Convert to WebP
    echo -e "${GREEN}🔄 Converting${NC} $(basename "$png_file")..."
    if cwebp -q $QUALITY "$png_file" -o "$webp_file" > /dev/null 2>&1; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || echo "0")
        else
            webp_size=$(stat -c%s "$webp_file" 2>/dev/null || echo "0")
        fi
        new_size=$((new_size + webp_size))
        if [ "$file_size" -gt 0 ]; then
            reduction=$((100 - (webp_size * 100 / file_size)))
        else
            reduction=0
        fi
        echo -e "   ${GREEN}✅${NC} $(human_size $file_size) → $(human_size $webp_size) (${reduction}% smaller)"
        converted_files=$((converted_files + 1))
    else
        echo -e "   ${RED}❌ Failed${NC}"
    fi
    
done < <(find "$SOURCE_DIR" -type f -name "*.png" -print0 2>/dev/null || true)

echo ""

# Update code references if enabled
if [ "$UPDATE_CODE_REFS" = true ]; then
    # Check if there are any .png references in the code
    png_refs_count=$(grep -r '\.png"' "$CODE_DIRS" --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l | tr -d ' ') || png_refs_count=0
    
    if [ "$png_refs_count" -gt 0 ]; then
        echo "🔧 Updating code references from .png to .webp..."
        echo "   Found $png_refs_count .png references in code"
        echo ""
        
        # Find and update all .ts and .tsx files
        while IFS= read -r -d '' code_file; do
            # Check if file contains .png" references
            if grep -q '\.png"' "$code_file" 2>/dev/null; then
                # Update the file (compatible with both macOS and Linux)
                if [[ "$OSTYPE" == "darwin"* ]]; then
                    sed -i '' 's/\.png"/\.webp"/g' "$code_file"
                else
                    sed -i 's/\.png"/\.webp"/g' "$code_file"
                fi
                echo -e "   ${GREEN}✅${NC} Updated $(basename "$code_file")"
                code_files_updated=$((code_files_updated + 1))
            fi
        done < <(find "$CODE_DIRS" -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 2>/dev/null || true)
        
        echo ""
        echo -e "${GREEN}✅ Updated $code_files_updated code files${NC}"
        echo ""
    fi
fi

# Delete original PNGs if enabled and conversion was successful
if [ "$DELETE_ORIGINALS" = true ] && [ $converted_files -gt 0 ]; then
    echo "🗑️  Deleting original PNG files..."
    echo ""
    find "$SOURCE_DIR" -type f -name "*.png" -delete
    echo -e "${GREEN}✅ Deleted $total_files original PNG files${NC}"
    echo ""
fi

echo ""
echo "============================================"
echo "📊 OPTIMIZATION SUMMARY"
echo "============================================"
echo ""
echo "Total PNG files found:    $total_files"
echo "Converted:                $converted_files"
echo "Skipped (already fresh):  $skipped_files"
if [ "$UPDATE_CODE_REFS" = true ]; then
    echo "Code files updated:       $code_files_updated"
fi
echo ""
echo "Original size:            $(human_size $original_size)"
echo "Optimized size:           $(human_size $new_size)"

if [ $original_size -gt 0 ]; then
    reduction=$((100 - (new_size * 100 / original_size)))
    saved=$((original_size - new_size))
    echo "Space saved:              $(human_size $saved) (${reduction}%)"
fi

echo ""
echo -e "${GREEN}✅ Optimization complete!${NC}"
echo ""

if [ $converted_files -gt 0 ]; then
    echo "💡 Next steps:"
    if [ "$UPDATE_CODE_REFS" = true ]; then
        echo "   1. ✅ Code references updated automatically"
        echo "   2. Run: bun run build"
        echo "   3. Test the app to ensure images display correctly"
        if [ "$DELETE_ORIGINALS" = false ]; then
            echo "   4. If everything works, set DELETE_ORIGINALS=true and re-run"
        fi
    else
        echo "   1. Update your code to use .webp instead of .png"
        echo "   2. Run: bun run build"
        echo "   3. Test in the app to ensure images display correctly"
    fi
else
    echo "ℹ️  All images are already optimized!"
fi
echo ""
