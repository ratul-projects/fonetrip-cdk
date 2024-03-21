"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LamdaStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const path_1 = require("path");
class LamdaStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, prop) {
        super(scope, id, prop);
        this._createUserLamda();
    }
    _createUserLamda() {
        const userLamda = new aws_lambda_1.Function(this, "userlamda", {
            runtime: aws_lambda_1.Runtime.NODEJS_18_X,
            handler: "User.getAllUser",
            code: aws_lambda_1.Code.fromAsset((0, path_1.join)(__dirname, "../", "../", "services")),
        });
        this.userLamdaRef = new aws_apigateway_1.LambdaIntegration(userLamda);
    }
}
exports.LamdaStack = LamdaStack;
