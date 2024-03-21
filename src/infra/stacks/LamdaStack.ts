import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { join } from "path";

export class LamdaStack extends Stack {
  public userLamdaRef: LambdaIntegration;
  constructor(scope: Construct, id: string, prop?: StackProps) {
    super(scope, id, prop);
    this._createUserLamda();
  }
  private _createUserLamda() {
    const userLamda = new Function(this, "userlamda", {
      runtime: Runtime.NODEJS_18_X,
      handler: "User.getAllUser",
      code: Code.fromAsset(join(__dirname, "../", "../", "services")),
    });
    this.userLamdaRef = new LambdaIntegration(userLamda);
  }
}
