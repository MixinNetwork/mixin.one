#!/bin/sh

rm -r dist/*
npm run dist || exit

gsutil defacl ch -u AllUsers:R gs://mixin-one

gsutil -h "Cache-Control:public, max-age=31536000" -h "Content-Encoding:gzip" -m cp dist/*.css gs://mixin-one/assets
gsutil -h "Cache-Control:public, max-age=31536000" -h "Content-Encoding:gzip" -m cp dist/*.js gs://mixin-one/assets
rm dist/*.css dist/*.js

gsutil -h "Cache-Control:public, max-age=31536000" -m cp -r dist/* gs://mixin-one/assets

scp dist/index.html one@mixin-deploy-web:tmp/mixin.one.html
ssh one@mixin-deploy-web sudo mv /home/one/tmp/mixin.one.html /var/www/html/dist/mixin.one.html
