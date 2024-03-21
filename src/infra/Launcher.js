"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const LamdaStack_1 = require("./stacks/LamdaStack");
const ApiGateWayStack_1 = require("./stacks/ApiGateWayStack");
const app = new aws_cdk_lib_1.App();
const lamdaStack = new LamdaStack_1.LamdaStack(app, "lamdastack");
const apiGateWayStack = new ApiGateWayStack_1.ApiGateWayStack(app, "api-gateway", {
    userApiLamdaRef: lamdaStack.userLamdaRef,
});
