#!/usr/bin/env bash

NAKED_BUCKET_NAME=$DEPLOY_ENV.$APP_ID_LOWERCASE.$ROOT_DOMAIN_NAME
WWW_BUCKET_NAME=www.$DEPLOY_ENV.$APP_ID_LOWERCASE.$ROOT_DOMAIN_NAME
STACK_NAME=$DEPLOY_ENV-$APP_ID_UPPERCASE-STACK

# if stack created for the first time - the buckets might not be available - so it makes sense to wait till stack gets created.
echo "[INFO] checking stack creation status : ${STACK_NAME}"
IS_STACK_CREATION_IN_PROGRESS="$("$AWS_CLI" cloudformation list-stacks --stack-status-filter CREATE_IN_PROGRESS | grep "$STACK_NAME")"
echo "[INFO] Stack Creation status check : ${IS_STACK_CREATION_IN_PROGRESS}"

if [ -n "$IS_STACK_CREATION_IN_PROGRESS" ]; then
  echo "[INFO] STACK Creation in Progress"
  aws cloudformation wait stack-create-complete --stack-name $STACK_NAME
  echo "[INFO] Exiting from wait..."
fi

echo "[INFO] Using Bucket Name : ${NAKED_BUCKET_NAME}"
# // think of s3 syncing here - so no need to upload the unchanged files..

echo "[INFO] Deleting all the files from bucket : ${APP_DOMAIN_NAME}"
$AWS_CLI s3 rm s3://$NAKED_BUCKET_NAME --recursive

echo "[INFO] Copying new files to the bucket : ${APP_DOMAIN_NAME}"
$AWS_CLI s3 cp dist s3://$NAKED_BUCKET_NAME \
    --recursive \
    --acl public-read
echo "[INFO] Copying Complete."
