import { App, CfnOutput } from "aws-cdk-lib";
import { LamdaStack } from "./stacks/LamdaStack";
import { ApiGateWayStack } from "./stacks/ApiGateWayStack";

const app = new App();

const lamdaStack = new LamdaStack(app, "lamdastack");
const apiGateWayStack = new ApiGateWayStack(app, "api-gateway", {
  userApiLamdaRef: lamdaStack.userLamdaRef,
});
