var JsonRefs = require('json-refs');
var YAML = require('yaml-js');
var fs = require('fs');
var path = require('path');

const OUTPUT_FILE_NAME = "stack-template.yaml";
const OUTPUT_FOLDER_NAME = process.cwd() + "/.build/";

var mergeYaml = function(rootYaml){
    var relativeBase = path.dirname(rootYaml);
    var root = YAML.load(fs.readFileSync(rootYaml).toString());
    var options = {
        filter: function(ref){
            return ref.uri.indexOf('#/') !== 0;
        },
        includeInvalid: true,
        loaderOptions : {
            processContent: function (res, cb) {
                cb(undefined, YAML.load(res.text));
            }
        },
        relativeBase: relativeBase
    };
    JsonRefs.resolveRefs(root, options)
        .then(function (res) {
            console.log((OUTPUT_FOLDER_NAME + OUTPUT_FILE_NAME), YAML.dump(res.resolved));
            // fs.writeFileSync('./dist/swagger2.json', JSON.stringify(res.resolved, null, 2), 'utf8');
            fs.writeFileSync((OUTPUT_FOLDER_NAME + OUTPUT_FILE_NAME),
                YAML.dump(res.resolved),
                'utf8');
        }, function (err) {
            console.error(err.stack);
        });
};
var deployEnv = process.DEPLOY_ENV || "dev";
var stackTemplatePath = "techops/deploy/" + deployEnv + "/" + "stack.yaml";
mergeYaml(stackTemplatePath);