var checkEnvConfig = function(){
    // check for env variables and throw error if required env vars are not found
    if(! process.env.AWS_CLI){
        throw new Error("AWS_CLI env var not set");
    }
    if(! process.env.AWS_ACCOUNT_ID){
        throw new Error("AWS_ACCOUNT_ID env var not set");
    }
    if(! process.env.AWS_ACCESS_KEY_ID){
        throw new Error("AWS_ACCESS_KEY_ID env var not set");
    }
    if(! process.env.AWS_SECRET_ACCESS_KEY){
        throw new Error("AWS_SECRET_ACCESS_KEY env var not set");
    }
    if(! process.env.AWS_REGION){
        throw new Error("AWS_REGION env var not set");
    }
    if(! process.env.AWS_DEFAULT_REGION){
        throw new Error("AWS_DEFAULT_REGION env var not set");
    }
    if(! process.env.ROOT_DOMAIN_NAME){
        throw new Error("ROOT_DOMAIN_NAME env var not set");
    }
    if(! process.env.DEPLOY_ENV){
        throw new Error("DEPLOY_ENV env var not set");
    }
    
    console.log("###################################################################################");
    console.log("##### App ENV Variables...");
    console.log("###################################################################################");
    console.log("Using ENV Variable :: AWS_CLI :: ", process.env.AWS_CLI);
    console.log("Using ENV Variable :: AWS_DEFAULT_REGION :: ", process.env.AWS_DEFAULT_REGION);
    console.log("Using ENV Variable :: AWS_REGION :: ", process.env.AWS_REGION);
    console.log("Using ENV Variable :: APP_FULL_NAME :: ", process.env.APP_FULL_NAME);
    console.log("Using ENV Variable :: APP_DESCRIPTION :: ", process.env.APP_DESCRIPTION);
    console.log("Using ENV Variable :: APP_ID_UPPERCASE :: ", process.env.APP_ID_UPPERCASE);
    console.log("Using ENV Variable :: APP_ID_LOWERCASE :: ", process.env.APP_ID_LOWERCASE);
    console.log("Using ENV Variable :: ROOT_DOMAIN_NAME :: ", process.env.ROOT_DOMAIN_NAME);
    console.log("Using ENV Variable :: DEPLOY_ENV :: ", process.env.DEPLOY_ENV);
    console.log("###################################################################################");
    console.log("###################################################################################");
    
};
checkEnvConfig();