@echo off
chcp 65001 >nul
cd /d "%~dp0"
if exist "dist\index.html" (
  start "" "%cd%\dist\index.html"
) else (
  echo 还没有生成 dist。请先在项目目录执行: npm run build
  echo 完成后可双击本脚本，或直接双击 dist\index.html
  pause
)
