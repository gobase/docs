#!/bin/sh

npm run build:website

cp -r website/dist/* docs/

git add .
git commit -m "build website"
git push stag master
