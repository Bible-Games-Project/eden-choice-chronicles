# Translation Workflow Guide

Este documento explica cómo exportar textos pendientes, traducirlos con IA, e importarlos de vuelta.

## 🎯 **Estrategia Recomendada**

Para **6,329 strings** por idioma, la mejor estrategia es traducir en fases:

### **Fase 1: UI (crítico)** 
- Solo **9 strings** (paywall)
- Impacto inmediato en UX
- Comando: `make export-translations-ui`
- Tiempo: 5-10 minutos con IA

### **Fase 2: Historias en batches**
- **~6,320 strings** divididos en batches de 200
- **22 batches** aprox. por idioma
- Comando: `node scripts/export-missing-translations.mjs --lang=es --batch-size=200`
- Tiempo: 1-2 horas por idioma procesando batch por batch con IA

### **¿Por qué batches de 200?**
- ChatGPT/Claude tienen límites de tokens (~4,000-8,000 tokens por petición)
- 200 strings ≈ 2,000-3,000 tokens (seguro y rápido)
- Permite revisar progreso incremental
- Puedes pausar y continuar cuando quieras

---

## 📤 **Paso 1: Exportar textos pendientes**

Exporta todos los textos que necesitan traducción (los que tienen `[TODO:lang]`):

```bash
# ⚡ Recomendado: Exportar en batches de 200 strings
make export-translations-batch
# o con idioma específico:
node scripts/export-missing-translations.mjs --lang=es --batch-size=200

# 🎯 Solo UI (9 strings - perfecto para empezar)
make export-translations-ui
# o:
node scripts/export-missing-translations.mjs --lang=es --ui-only

# 📚 Exportar TODO (miles de strings - no recomendado)
make export-translations

# 📊 Formato CSV (para Excel/Google Sheets)
make export-translations-csv

# 📖 Formato Markdown (para lectura fácil)
node scripts/export-missing-translations.mjs --format=markdown
```

**💡 Tip:** Empieza con `--ui-only` para traducir primero la interfaz (solo 9 strings), luego continúa con batches.

## 🤖 **Paso 2: Traducir con IA**

### Formato del archivo exportado:

```json
{
  "es": [
    {
      "file": "common.json",
      "key": "settings",
      "english": "Settings",
      "current": "[TODO:es] Settings"
    }
  ]
}
```

### Opción A: ChatGPT / Claude (Recomendado para volúmenes pequeños)

1. Abre `translations-to-do.json`
2. Copia el contenido completo
3. Usa este prompt en ChatGPT o Claude:

```
Tengo este archivo JSON con traducciones pendientes para una app bíblica.
Por favor traduce todos los valores de "english" al español y ponlos en un nuevo campo "translation".
Mantén el formato JSON exacto. Aquí está el archivo:

[PEGA EL JSON AQUÍ]

Formato de salida esperado:
{
  "es": [
    {
      "file": "common.json",
      "key": "settings",
      "english": "Settings",
      "current": "[TODO:es] Settings",
      "translation": "Configuración"
    }
  ]
}
```

4. Guarda la respuesta en `translations-completed.json`

### Opción B: Script automático con API (Para todos los idiomas)

Si tienes API key de Google Translate o DeepL:

```bash
# TODO: Crear script de traducción automática
node scripts/auto-translate.mjs translations-to-do.json --api-key=YOUR_KEY
```

## 📥 **Paso 3: Importar traducciones**

Una vez tengas el archivo con las traducciones (con el campo `translation` agregado):

```bash
# Ver qué se aplicaría (no modifica archivos)
node scripts/import-translations.mjs translations-completed.json --dry-run

# Aplicar las traducciones
node scripts/import-translations.mjs translations-completed.json
```

**💡 Trabajando con batches:**

Si exportaste con `--batch-size`, tendrás múltiples archivos. Tradúcelos uno por uno e impórtalos:

```bash
# Batch 1
node scripts/import-translations.mjs translations-to-do-es-batch1-of-22.json

# Batch 2
node scripts/import-translations.mjs translations-to-do-es-batch2-of-22.json

# ... y así sucesivamente

# O todos a la vez:
for file in translations-to-do-es-batch*.json; do
  node scripts/import-translations.mjs "$file"
done
```

## ✅ **Paso 4: Validar**

Verifica que todo está correcto:

```bash
make validate-locales
```

Si aún quedan pendientes, repite el proceso.

## 📊 **Estado actual**

Para ver cuántas traducciones faltan:

```bash
# Ver total
grep -r "\[TODO:" src/locales --include="*.json" | wc -l

# Ver por idioma
grep -r "\[TODO:es\]" src/locales --include="*.json" | wc -l
```

## 💡 **Tips**

### Traducir por prioridad

1. **Primero UI** (importante para UX):
   ```bash
   node scripts/export-missing-translations.mjs --lang=es
   # Edita manualmente solo common.json en el archivo exportado
   node scripts/import-translations.mjs translations-completed.json
   ```

2. **Luego historias populares**:
   - Extrae solo creation, adam-eve, noah, etc.
   - Traduce esas primero
   - Importa

3. **Finalmente todo lo demás**

### Formato de respuesta de IA

Asegúrate de que la IA devuelva:
- ✅ JSON válido
- ✅ Campo `translation` agregado
- ✅ Mantiene `file` y `key` sin cambios
- ❌ No incluye marcadores `[TODO:`

### Procesar en lotes

Si son muchos textos, divide el archivo JSON en lotes más pequeños:

```bash
# Exportar solo common.json
node scripts/export-missing-translations.mjs --lang=es > /tmp/all.json
# Edita /tmp/all.json para quedarte solo con common.json
# Traduce ese fragmento
# Importa
```

## 🔧 **Troubleshooting**

### Error: "translation field missing"
La IA debe agregar el campo `translation`, no reemplazar `english`.

### Error: "JSON parse error"
Revisa que el JSON esté bien formateado. Usa un validador online.

### Traducciones no se aplican
Verifica que:
- El campo `file` y `key` coincidan exactamente
- El valor `translation` no esté vacío
- No tenga marcadores `[TODO:`

## 📖 **Ejemplo completo**

```bash
# 1. Exportar español
node scripts/export-missing-translations.mjs --lang=es

# 2. Traducir con IA (edita translations-to-do.json manualmente o con IA)

# 3. Importar (prueba primero con dry-run)
node scripts/import-translations.mjs translations-to-do.json --dry-run

# 4. Aplicar si todo se ve bien
node scripts/import-translations.mjs translations-to-do.json

# 5. Validar
make validate-locales
```

## 🌍 **Idiomas soportados**

- `es` - Español
- `pt-BR` - Portugués (Brasil)
- `fr` - Francés
- `de` - Alemán
- `it` - Italiano
- `pl` - Polaco
- `ru` - Ruso
- `tr` - Turco
- `ja` - Japonés
- `ko` - Coreano
- `ar` - Árabe
