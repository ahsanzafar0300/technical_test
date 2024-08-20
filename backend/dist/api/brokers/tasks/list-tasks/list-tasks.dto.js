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
exports.BrokerTasksListBrokerApplicationsListBadRequestResponseDto = exports.BrokerTasksListResponseDto = exports.BrokerTask = exports.BrokerTasksListRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_messages_1 = require("../../../../common/constants/response-messages");
const class_validator_1 = require("class-validator");
const responses_1 = require("../../../../common/responses");
const task_entity_1 = require("../../../../models/tasks/task.entity");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const class_transformer_1 = require("class-transformer");
class BrokerTasksListRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: false, enum: require("../../../../enums/task-status.enum").TaskStatus }, minimumDateDue: { required: false, type: () => Date }, maximumDateDue: { required: false, type: () => Date }, minimumDateCompleted: { required: false, type: () => Date }, maximumDateCompleted: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional flag for task status',
        enum: task_status_enum_1.TaskStatus,
        enumName: 'TaskStatus',
    }),
    (0, class_validator_1.IsEnum)(task_status_enum_1.TaskStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerTasksListRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum date for the task due date',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerTasksListRequestDto.prototype, "minimumDateDue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum date for the task due date',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerTasksListRequestDto.prototype, "maximumDateDue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum date for the task completion date',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerTasksListRequestDto.prototype, "minimumDateCompleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum date for the task completion date',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerTasksListRequestDto.prototype, "maximumDateCompleted", void 0);
exports.BrokerTasksListRequestDto = BrokerTasksListRequestDto;
class BrokerTask extends (0, swagger_1.PickType)(task_entity_1.Task, ['id', 'createdAt', 'status', 'title']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BrokerTask = BrokerTask;
class BrokerTasksListResponseDto extends responses_1.SuccessResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tasks: { required: true, type: () => [require("./list-tasks.dto").BrokerTask] } };
    }
}
exports.BrokerTasksListResponseDto = BrokerTasksListResponseDto;
const BAD_REQUEST_ERRORS = [
    response_messages_1.INVALID_MINIMUM_DATE_ERROR,
    response_messages_1.INVALID_MAXIMUM_DATE_ERROR,
    response_messages_1.MINIMUM_DATE_EXCEEDS_MAXIMUM_DATE_ERROR,
];
class BrokerTasksListBrokerApplicationsListBadRequestResponseDto {
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
], BrokerTasksListBrokerApplicationsListBadRequestResponseDto.prototype, "message", void 0);
exports.BrokerTasksListBrokerApplicationsListBadRequestResponseDto = BrokerTasksListBrokerApplicationsListBadRequestResponseDto;
//# sourceMappingURL=list-tasks.dto.js.map