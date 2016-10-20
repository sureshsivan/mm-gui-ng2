#!/usr/bin/env bash
STACK_NAME=MM-NG2-WEB-STACK
DOMAIN_NAME="sivashub.com"
SUBDOMAIN_PREFIX="mm.ng2"
REGION_HOSTED_ZONE_ID="Z3AQBSTGFYJSTF"
DOMAIN_HOSTED_ZONE_ID="Z1SDAQ7OTDOJDU"
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
echo $DOMAIN_NAME
echo $SUBDOMAIN_PREFIX
if [ -z "$STACK_ALIVE" ]; then
    echo "[INFO] ${MM-NG2-WEB-STACK} Stack was never created or dead - recreating the complete stack : CREATING NEW STACK" >& 2
    $AWS_CLI cloudformation create-stack \
            --stack-name $STACK_NAME \
            --template-body file://./deploy/cf-template-web-stack.json \
            --capabilities CAPABILITY_IAM \
            --parameters \
                ParameterKey=PRoute53HostedZone,ParameterValue=$DOMAIN_NAME   \
                ParameterKey=PRoute53SubDomainPrefix,ParameterValue=$SUBDOMAIN_PREFIX   \
                ParameterKey=PRoute53RegionHostedZoneId,ParameterValue=$REGION_HOSTED_ZONE_ID   \
                ParameterKey=PRoute53DomainHostedZoneId,ParameterValue=$DOMAIN_HOSTED_ZONE_ID   \
            --region $AWS_REGION
    echo "[INFO] STACK CREATION : Kicked Off"
else
    echo "[INFO] ${MM-NG2-WEB-STACK} Stack was already built and alive : UPDATING EXISTING STACK" >& 2
    $AWS_CLI cloudformation update-stack \
            --stack-name $STACK_NAME \
            --template-body file://./deploy/cf-template-web-stack.json \
            --capabilities CAPABILITY_IAM \
            --parameters \
                ParameterKey=PRoute53HostedZone,ParameterValue=$DOMAIN_NAME   \
                ParameterKey=PRoute53SubDomainPrefix,ParameterValue=$SUBDOMAIN_PREFIX   \
                ParameterKey=PRoute53RegionHostedZoneId,ParameterValue=$REGION_HOSTED_ZONE_ID   \
                ParameterKey=PRoute53DomainHostedZoneId,ParameterValue=$DOMAIN_HOSTED_ZONE_ID   \
            --region $AWS_REGION
    echo "[INFO] STACK UPDATE : Kicked Off"
fi