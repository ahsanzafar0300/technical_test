"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const response_messages_1 = require("../constants/response-messages");
const common_1 = require("@nestjs/common");
const logger_1 = require("../logger/logger");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor() {
        this.logger = new logger_1.CustomLogger(HttpExceptionFilter_1.name);
    }
    catch(error, host) {
        var _a;
        this.logger.error(error);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = error.getStatus();
        const notProduction = process.env.NODE_ENV !== 'prod';
        const returnData = {
            message: response_messages_1.INTERNAL_SERVER_ERROR,
            error: notProduction ? error.message : undefined,
            stack: notProduction ? error.stack : undefined,
        };
        if (status === common_1.HttpStatus.NOT_FOUND) {
            returnData.message = response_messages_1.NOT_FOUND_ERROR;
            return response.status(status).json(returnData);
        }
        if (status === common_1.HttpStatus.UNAUTHORIZED) {
            returnData.message = response_messages_1.AUTH_ERROR;
            return response.status(status).json(returnData);
        }
        if (status === common_1.HttpStatus.BAD_REQUEST) {
            if (error.message.endsWith('-error') || error.message[0].endsWith('-error')) {
                returnData.message = error.message;
                return response.status(common_1.HttpStatus.BAD_REQUEST).json(returnData);
            }
            const errorResponse = error.getResponse();
            if ((_a = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse[0]) === null || _a === void 0 ? void 0 : _a.endsWith('-error')) {
                returnData.message = errorResponse;
                return response.status(common_1.HttpStatus.BAD_REQUEST).json(returnData);
            }
        }
        return response.status(status).json(returnData);
    }
};
HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map