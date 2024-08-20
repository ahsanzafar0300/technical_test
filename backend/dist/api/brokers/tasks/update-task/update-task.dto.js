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
exports.BrokerTasksUpdateBadRequestResponseDto = exports.UPDATE_TASK_ERRORS = exports.BrokerTasksUpdateResponseDto = exports.BrokerTasksUpdateBodyDto = exports.BrokerTasksUpdateQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_messages_1 = require("../../../../common/constants/response-messages");
const class_validator_1 = require("class-validator");
const responses_1 = require("../../../../common/responses");
const class_transformer_1 = require("class-transformer");
class BrokerTasksUpdateQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { taskId: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The task id',
    }),
    (0, class_validator_1.IsInt)({ message: response_messages_1.INVALID_TASK_ID_ERROR }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BrokerTasksUpdateQueryDto.prototype, "taskId", void 0);
exports.BrokerTasksUpdateQueryDto = BrokerTasksUpdateQueryDto;
class BrokerTasksUpdateBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { file: { required: true, type: () => String }, complete: { required: false, type: () => Boolean } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The uploaded file as a base64 string',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BrokerTasksUpdateBodyDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag to complete the task when all files are uploaded',
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], BrokerTasksUpdateBodyDto.prototype, "complete", void 0);
exports.BrokerTasksUpdateBodyDto = BrokerTasksUpdateBodyDto;
class BrokerTasksUpdateResponseDto extends responses_1.SuccessResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BrokerTasksUpdateResponseDto = BrokerTasksUpdateResponseDto;
exports.UPDATE_TASK_ERRORS = [
    response_messages_1.INTERNAL_SERVER_ERROR,
    response_messages_1.INVALID_USER_ERROR,
    response_messages_1.TASK_NOT_FOUND_ERROR,
    response_messages_1.TASK_SUBMITTED_ERROR,
    response_messages_1.TASK_UPLOADS_EXCEEDED_ERROR,
];
class BrokerTasksUpdateBadRequestResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The error code',
        enum: exports.UPDATE_TASK_ERRORS,
    }),
    (0, class_validator_1.IsEnum)(exports.UPDATE_TASK_ERRORS),
    __metadata("design:type", String)
], BrokerTasksUpdateBadRequestResponseDto.prototype, "message", void 0);
exports.BrokerTasksUpdateBadRequestResponseDto = BrokerTasksUpdateBadRequestResponseDto;
//# sourceMappingURL=update-task.dto.js.map