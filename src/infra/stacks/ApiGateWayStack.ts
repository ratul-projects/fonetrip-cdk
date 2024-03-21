import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { HttpMethod } from "aws-cdk-lib/aws-events";
import { Construct } from "constructs";
import { ApiGateWayInterface } from "../interface/ApiGateWayInterface";

export class ApiGateWayStack extends Stack {
  private _apiGateWayRef: RestApi;
  constructor(scope: Construct, id: string, prop: ApiGateWayInterface) {
    super(scope, id, prop);
    this._createApiGateWay();
    this._userApiResources(prop);
    new CfnOutput(this, "apiGateWayUrl", {
      value: this._apiGateWayRef.url,
      exportName: "userapiurl",
    });
  }

  private _createApiGateWay() {
    this._apiGateWayRef = new RestApi(this, "rest-api-gateway");
  }

  private _userApiResources(prop) {
    const userResources = this._apiGateWayRef.root.addResource("user");
    userResources.addMethod(HttpMethod.GET, prop.userApiLamdaRef);
  }
}
