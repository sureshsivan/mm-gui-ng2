#!/usr/bin/env bash

echo "[INFO] Deleting all the files from bucket : ${APP_DOMAIN_NAME}"
$AWS_CLI s3 rm s3://$APP_DOMAIN_NAME --recursive

echo "[INFO] Copying new files to the bucket : ${APP_DOMAIN_NAME}"
$AWS_CLI s3 cp dist s3://$APP_DOMAIN_NAME \
    --recursive \
    --acl public-read
echo "[INFO] Copying Complete."
