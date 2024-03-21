"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGateWayStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const aws_events_1 = require("aws-cdk-lib/aws-events");
class ApiGateWayStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, prop) {
        super(scope, id, prop);
        this._createApiGateWay();
        this._userApiResources(prop);
        new aws_cdk_lib_1.CfnOutput(this, "apiGateWayUrl", {
            value: this._apiGateWayRef.url,
            exportName: "userapiurl",
        });
    }
    _createApiGateWay() {
        this._apiGateWayRef = new aws_apigateway_1.RestApi(this, "rest-api-gateway");
    }
    _userApiResources(prop) {
        const userResources = this._apiGateWayRef.root.addResource("user");
        userResources.addMethod(aws_events_1.HttpMethod.GET, prop.userApiLamdaRef);
    }
}
exports.ApiGateWayStack = ApiGateWayStack;
