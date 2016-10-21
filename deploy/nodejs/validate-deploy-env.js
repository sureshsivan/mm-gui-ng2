
var checkEnvConfig = function(){
    // check for env variables and throw error if required env vars are not found
    if(! process.env.AWS_CLI){
        throw new Error("AWS_CLI env var not set");
    }
    if(! process.env.DOMAIN_NAME){
        throw new Error("DOMAIN_NAME env var not set");
    }
    if(! process.env.SUBDOMAIN_PREFIX){
        throw new Error("SUBDOMAIN_PREFIX env var not set");
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
};
checkEnvConfig();