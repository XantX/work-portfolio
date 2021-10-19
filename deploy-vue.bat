@echo off
call npm run build
cd dist
call git add -A
set version=%1
call git commit -m "version %version%"
call git push -f https://github.com/XantX/work-portfolio.git master:gh-pages
cd ..
