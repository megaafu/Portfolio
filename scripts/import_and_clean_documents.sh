#!/usr/bin/env bash
set -euo pipefail

DOCS_SRC="/home/megaafu/Documents"
DEST_DIR="$(pwd)/docs/training"

echo "==> Preparing destination directory: $DEST_DIR"
mkdir -p "$DEST_DIR"

if [ -d "$DOCS_SRC" ]; then
  FILE_COUNT=$(find "$DOCS_SRC" -mindepth 1 | wc -l)
  if [ "$FILE_COUNT" -gt 0 ]; then
    echo "==> Moving $FILE_COUNT items from $DOCS_SRC to $DEST_DIR..."
    mv "$DOCS_SRC"/* "$DEST_DIR"/
    echo "==> Successfully imported training files into $DEST_DIR."
    echo "==> Cleaned up $DOCS_SRC."
  else
    echo "==> $DOCS_SRC is already empty."
  fi
else
  echo "==> $DOCS_SRC directory not found."
fi

echo "==> Training files in $DEST_DIR:"
ls -la "$DEST_DIR" || true
