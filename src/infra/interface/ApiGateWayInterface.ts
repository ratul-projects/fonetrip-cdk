import { StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

export interface ApiGateWayInterface extends StackProps {
  userApiLamdaRef: LambdaIntegration;
}
