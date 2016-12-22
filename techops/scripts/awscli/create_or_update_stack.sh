#!/usr/bin/env bash

#  Utils
function error_exit {
    echo "$1" >&2   ## Send message to stderr. Exclude >&2 if you don't want it that way.
    exit "${2:-1}"  ## Return a code specified by $2 or 1 by default.
}



# check for stack existance
# TODO : Check based on all status codes
# TODO : use http://docs.aws.amazon.com/cli/latest/reference/cloudformation/wait/stack-exists.html
#CREATE NEW STACK IF [CREATE_FAILED, DELETE_COMPLETE]
# Update Stack if [CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS, DELETE_FAILED, UPDATE_ROLLBACK_FAILED, UPDATE_ROLLBACK_COMPLETE]
# Wait and create a new stacks if [ROLLBACK_IN_PROGRESS, DELETE_IN_PROGRESS]
# Wait and update stack if [CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATE_ROLLBACK_IN_PROGRESS, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS]


STACK_NAME=$DEPLOY_ENV-$APP_ID_UPPERCASE-STACK
CF_STACK_FILE="file://.build/stack-template.yaml"

#  X CREATE_IN_PROGRESS
#  X CREATE_FAILED
#  X CREATE_COMPLETE
#  X ROLLBACK_IN_PROGRESS
#  ROLLBACK_FAILED
#  ROLLBACK_COMPLETE
#  X DELETE_IN_PROGRESS
#  X DELETE_FAILED
#  X DELETE_COMPLETE
#  X UPDATE_IN_PROGRESS
#  X UPDATE_COMPLETE_CLEANUP_IN_PROGRESS
#  X UPDATE_COMPLETE
#  X UPDATE_ROLLBACK_IN_PROGRESS
#  X UPDATE_ROLLBACK_FAILED
#  X UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS
#  X UPDATE_ROLLBACK_COMPLETE
STACK_ALIVE="$("$AWS_CLI" cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE | grep "$STACK_NAME")"

NAKED_BUCKET_NAME=$APP_ID_LOWERCASE.$ROOT_DOMAIN_NAME
WWW_BUCKET_NAME=www.$APP_ID_LOWERCASE.$ROOT_DOMAIN_NAME

NAKED_BUCKET_EXISTS_SOMEWHERE_ELSE="$(aws s3 ls s3://"NAKED_BUCKET_NAME" | grep -o "AllAccessDisabled")"
WWW_BUCKET_EXISTS_SOMEWHERE_ELSE="$(aws s3 ls s3://"NAKED_BUCKET_NAME" | grep -o "AllAccessDisabled")"

if [[ -z NAKED_BUCKET_EXISTS_SOMEWHERE_ELSE || -z WWW_BUCKET_EXISTS_SOMEWHERE_ELSE ]]; then
  echo 'Bucket for the Domain already exists with someother AWS account'
  exit 61
fi

NAKED_BUCKET_NOT_EXISTS="$(aws s3 ls s3://"NAKED_BUCKET_NAME" | grep -o "NoSuchBucket")"
WWW_BUCKET_NOT_EXISTS="$(aws s3 ls s3://"NAKED_BUCKET_NAME" | grep -o "NoSuchBucket")"
NAKED_BUCKET_SKIP_CREATION="FALSE"
CREATE_WWW_SKIP_CREATION="FALSE"

#// empty means bucket exists under own account
if [[ -z NAKED_BUCKET_NOT_EXISTS ]]; then   
  NAKED_BUCKET_SKIP_CREATION="TRUE"
fi

# // empty means bucket exists under own account
if [[ -z WWW_BUCKET_NOT_EXISTS ]]; then     
  WWW_BUCKET_SKIP_CREATION="TRUE"
fi

# check whether LAMBDA_FILE_NAME and SWAGGER_FILE_NAME has proper value and return a non zero exit code if not
# no need to trigger the build.

if [ -z "$STACK_ALIVE" ]; then
    echo "[INFO] ${STACK_NAME} Stack was never created or dead - recreating the complete stack : CREATING NEW STACK" >& 2
    $AWS_CLI cloudformation create-stack                                                                                            \
            --stack-name $STACK_NAME                                                                                                \
            --template-body $CF_STACK_FILE                                                                                          \
            --capabilities CAPABILITY_IAM                                                                                           \
            --parameters                                                                                                            \
                ParameterKey=ParamAppFullName,ParameterValue=$APP_FULL_NAME                                                         \
                ParameterKey=ParamAppDescription,ParameterValue=$APP_DESCRIPTION                                                    \
                ParameterKey=ParamAppIdentifierCaps,ParameterValue=$APP_ID_UPPERCASE                                                \
                ParameterKey=ParamAppIdentifierSmall,ParameterValue=$APP_ID_LOWERCASE                                               \
                ParameterKey=ParamRootDomain,ParameterValue=$ROOT_DOMAIN_NAME                                                       \
                ParameterKey=ParamDeployEnv,ParameterValue=$DEPLOY_ENV                                                              \
                ParameterKey=ParamSkipNakedBucketCreation,ParameterValue=$NAKED_BUCKET_SKIP_CREATION                                \
                ParameterKey=ParamSkipWWWBucketCreation,ParameterValue=$WWW_BUCKET_SKIP_CREATION                                    \
            --region $AWS_REGION
    echo "[INFO] STACK CREATION : Kicked Off"
else
    echo "[INFO] ${STACK_NAME} Stack was already built and alive : UPDATING EXISTING STACK" >& 2
    $AWS_CLI cloudformation update-stack                                                                                            \
            --stack-name $STACK_NAME                                                                                                \
            --template-body $CF_STACK_FILE                                                                                          \
            --capabilities CAPABILITY_IAM                                                                                           \
            --parameters                                                                                                            \
                ParameterKey=ParamAppFullName,ParameterValue=$APP_FULL_NAME                                                         \
                ParameterKey=ParamAppDescription,ParameterValue=$APP_DESCRIPTION                                                    \
                ParameterKey=ParamAppIdentifierCaps,ParameterValue=$APP_ID_UPPERCASE                                                \
                ParameterKey=ParamAppIdentifierSmall,ParameterValue=$APP_ID_LOWERCASE                                               \
                ParameterKey=ParamRootDomain,ParameterValue=$ROOT_DOMAIN_NAME                                                       \
                ParameterKey=ParamDeployEnv,ParameterValue=$DEPLOY_ENV                                                              \
            --region $AWS_REGION
    echo "[INFO] STACK UPDATE : Kicked Off"
fi
