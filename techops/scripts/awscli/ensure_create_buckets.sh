NAKED_BUCKET_ID=$(python  -c 'import uuid; print uuid.uuid1()')
WWW_BUCKET_ID=$(python  -c 'import uuid; print uuid.uuid1()')

aws s3api create-bucket --bucket $NAKED_BUCKET_ID --region us-east-1 --acl public-read
aws s3api put-bucket-website --bucket $NAKED_BUCKET_ID --website-configuration file://website.json