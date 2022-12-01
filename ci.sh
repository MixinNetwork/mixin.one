#!/bin/bash

mkdir -p ./dist/assets

mv ./dist/{*.js,*.css,*.svg,*.png,*.jpg,*.woff,*.woff2,*.eot,*.ttf,*.gif,*.webp} ./dist/assets
mv ./dist/icons ./dist/assets/icons

