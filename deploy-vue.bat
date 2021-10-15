@echo off
call npm run build
call git add dist -f
set version=%1
call git commit -m "version %version%"
call git subtree push --prefix dist origin gh-pages
