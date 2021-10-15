@echo off

npm run build

git add dist -f

set version=%1

git commit -m "version %version%"

git subtree push --prefix dist origin gh-pages
