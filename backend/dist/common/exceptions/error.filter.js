"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ErrorFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../logger/logger");
const response_messages_1 = require("../constants/response-messages");
let ErrorFilter = ErrorFilter_1 = class ErrorFilter {
    constructor() {
        this.logger = new logger_1.CustomLogger(ErrorFilter_1.name);
    }
    catch(error, host) {
        this.logger.error(error);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const notProduction = process.env.NODE_ENV !== 'prod';
        if (error instanceof common_1.HttpException) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: error.message,
                error: notProduction ? error.message : undefined,
                stack: notProduction ? error.stack : undefined,
            });
        }
        return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: response_messages_1.INTERNAL_SERVER_ERROR,
            error: notProduction ? error.message : undefined,
            stack: notProduction ? error.stack : undefined,
        });
    }
};
ErrorFilter = ErrorFilter_1 = __decorate([
    (0, common_1.Catch)()
], ErrorFilter);
exports.ErrorFilter = ErrorFilter;
//# sourceMappingURL=error.filter.js.map