"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerSignInBadRequestResponseDto = exports.BrokerSignInResponseDto = exports.BrokerSignInBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const response_messages_1 = require("../../../common/constants/response-messages");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const responses_1 = require("../../../common/responses");
class BrokerSignInBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account email address for the broker',
    }),
    (0, class_validator_1.IsEmail)({}, { message: response_messages_1.INVALID_EMAIL_ERROR }),
    __metadata("design:type", String)
], BrokerSignInBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account password for the broker',
    }),
    (0, class_validator_1.IsString)({ message: response_messages_1.INVALID_PASSWORD_ERROR }),
    __metadata("design:type", String)
], BrokerSignInBodyDto.prototype, "password", void 0);
exports.BrokerSignInBodyDto = BrokerSignInBodyDto;
class BrokerSignInResponseDto extends responses_1.SuccessResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The session token',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BrokerSignInResponseDto.prototype, "token", void 0);
exports.BrokerSignInResponseDto = BrokerSignInResponseDto;
const BAD_REQUEST_ERRORS = [response_messages_1.EMAIL_NOT_FOUND_ERROR, response_messages_1.INVALID_PASSWORD_ERROR, response_messages_1.ACCOUNT_NOT_ACTIVE_ERROR];
class BrokerSignInBadRequestResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Failure message and reason',
        enum: BAD_REQUEST_ERRORS,
    }),
    (0, class_validator_1.IsEnum)(BAD_REQUEST_ERRORS),
    __metadata("design:type", String)
], BrokerSignInBadRequestResponseDto.prototype, "message", void 0);
exports.BrokerSignInBadRequestResponseDto = BrokerSignInBadRequestResponseDto;
//# sourceMappingURL=sign-in.dto.js.map