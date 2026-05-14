#!/bin/bash
cd "$(dirname "$0")" || exit 1

if [ -f "dist/index.html" ]; then
  open "dist/index.html"
else
  osascript -e 'display dialog "还没有 dist 目录。请先在终端执行：npm run build\n\n完成后可再次双击本文件，或直接双击 dist/index.html。" buttons {"好"} default button "好"' 2>/dev/null || \
    echo "还没有 dist。请先执行: npm run build"
  read -r -p "按回车关闭…"
fi
