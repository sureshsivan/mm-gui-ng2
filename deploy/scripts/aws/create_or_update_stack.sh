#!/usr/bin/env bash
STACK_NAME=MM-NG2-WEB-STACK
ROOT_DOMAIN_NAME="sivashub.com"
APP_DOMAIN_NAME="mm.ng2.sivashub.com"
# check for stack existance
# TODO : Check based on all status codes
#CREATE NEW STACK IF [CREATE_FAILED, DELETE_COMPLETE]
# Update Stack if [CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS, DELETE_FAILED, UPDATE_ROLLBACK_FAILED, UPDATE_ROLLBACK_COMPLETE]
# Wait and create a new stacks if [ROLLBACK_IN_PROGRESS, DELETE_IN_PROGRESS]
# Wait and update stack if [CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATE_ROLLBACK_IN_PROGRESS, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS]

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
echo $ROOT_DOMAIN_NAME
echo $APP_DOMAIN_NAME
if [ -z "$STACK_ALIVE" ]; then
    echo "[INFO] $STACK_NAME Stack was never created or dead - recreating the complete stack : CREATING NEW STACK" >& 2
    $AWS_CLI cloudformation create-stack \
            --stack-name $STACK_NAME \
            --template-body file://./deploy/cf-template-web-stack.json \
            --capabilities CAPABILITY_IAM \
            --parameters \
                ParameterKey=ParamRootDomain,ParameterValue=$ROOT_DOMAIN_NAME   \
                ParameterKey=ParamAppDomain,ParameterValue=$APP_DOMAIN_NAME
    echo "[INFO] STACK CREATION : Kicked Off"
else
    echo "[INFO] $STACK_NAME Stack was already built and alive : UPDATING EXISTING STACK" >& 2
    $AWS_CLI cloudformation update-stack \
            --stack-name $STACK_NAME \
            --template-body file://./deploy/cf-template-web-stack.json \
            --capabilities CAPABILITY_IAM \
            --parameters \
                ParameterKey=ParamRootDomain,ParameterValue=$ROOT_DOMAIN_NAME   \
                ParameterKey=ParamAppDomain,ParameterValue=$APP_DOMAIN_NAME
    echo "[INFO] STACK UPDATE : Kicked Off"
fi