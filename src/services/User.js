"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
async function getAllUser(event, context) {
    const response = {
        statusCode: 200,
        body: "Hello from lamda",
    };
    return response;
}
exports.getAllUser = getAllUser;
