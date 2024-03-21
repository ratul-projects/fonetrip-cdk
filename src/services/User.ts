import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
async function getAllUser(event: APIGatewayProxyEvent, context) {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: "Hello from lamda",
  };
  return response;
}

export { getAllUser };
