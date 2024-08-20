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
exports.BrokerApplicationsListBadRequestResponseDto = exports.BrokerApplicationsListResponseDto = exports.BrokerApplicationPostResponseDto = exports.ApplicationDto = exports.BrokerApplicationsListRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const application_entity_1 = require("../../../../models/applications/application.entity");
const application_status_enum_1 = require("../../../../enums/application-status.enum");
const response_messages_1 = require("../../../../common/constants/response-messages");
const class_validator_1 = require("class-validator");
const responses_1 = require("../../../../common/responses");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const class_transformer_1 = require("class-transformer");
class BrokerApplicationsListRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: false, enum: require("../../../../enums/application-status.enum").ApplicationStatus, isArray: true }, completed: { required: false, type: () => Object }, minimumDate: { required: false, type: () => Date }, maximumDate: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional flag for application status',
        enum: application_status_enum_1.ApplicationStatus,
        enumName: 'ApplicationStatus',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(application_status_enum_1.ApplicationStatus, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BrokerApplicationsListRequestDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional flag for applications with incomplete tasks',
        enum: task_status_enum_1.TaskStatus,
    }),
    (0, class_validator_1.IsEnum)(task_status_enum_1.TaskStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerApplicationsListRequestDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum date for the application submission',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerApplicationsListRequestDto.prototype, "minimumDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum date for the application submission',
    }),
    (0, class_transformer_1.Transform)(({ value }) => (value && !isNaN(value) ? value : null)),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerApplicationsListRequestDto.prototype, "maximumDate", void 0);
exports.BrokerApplicationsListRequestDto = BrokerApplicationsListRequestDto;
const class_validator_2 = require("class-validator");
class ApplicationDto extends (0, swagger_1.PickType)(application_entity_1.Application, [
    'applicantName',
    'applicantEmail',
    'applicantMobilePhoneNumber',
    'applicantAddress',
    'annualIncomeBeforeTax',
    'incomingAddress',
    'incomingDeposit',
    'incomingPrice',
    'incomingStampDuty',
    'loanAmount',
    'loanDuration',
    'monthlyExpenses',
    'outgoingAddress',
    'outgoingMortgage',
    'outgoingValuation',
    'savingsContribution'
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { applicantName: { required: true, type: () => String }, applicantEmail: { required: true, type: () => String }, applicantMobilePhoneNumber: { required: true, type: () => String }, applicantAddress: { required: true, type: () => String }, incomingAddress: { required: true, type: () => String }, outgoingAddress: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "applicantName", void 0);
__decorate([
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "applicantEmail", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "applicantMobilePhoneNumber", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "applicantAddress", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "incomingAddress", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], ApplicationDto.prototype, "outgoingAddress", void 0);
exports.ApplicationDto = ApplicationDto;
class BrokerApplicationPostResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { success: { required: true, type: () => Boolean }, loanAmount: { required: true, type: () => Number, nullable: true }, application: { required: true, type: () => require("../../../../models/applications/application.entity").Application } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], BrokerApplicationPostResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BrokerApplicationPostResponseDto.prototype, "loanAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: application_entity_1.Application }),
    __metadata("design:type", application_entity_1.Application)
], BrokerApplicationPostResponseDto.prototype, "application", void 0);
exports.BrokerApplicationPostResponseDto = BrokerApplicationPostResponseDto;
class BrokerApplicationDto extends (0, swagger_1.PickType)(application_entity_1.Application, [
    'id',
    'applicationId',
    'createdAt',
    'status',
    'loanAmount',
    'loanDuration',
    'applicantName',
    'incomingAddress',
    'outgoingAddress',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
class BrokerApplicationsListResponseDto extends responses_1.SuccessResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { applications: { required: true, type: () => [BrokerApplicationDto] } };
    }
}
exports.BrokerApplicationsListResponseDto = BrokerApplicationsListResponseDto;
const BAD_REQUEST_ERRORS = [
    response_messages_1.INVALID_MINIMUM_DATE_ERROR,
    response_messages_1.INVALID_MAXIMUM_DATE_ERROR,
    response_messages_1.MINIMUM_DATE_EXCEEDS_MAXIMUM_DATE_ERROR,
];
class BrokerApplicationsListBadRequestResponseDto {
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
], BrokerApplicationsListBadRequestResponseDto.prototype, "message", void 0);
exports.BrokerApplicationsListBadRequestResponseDto = BrokerApplicationsListBadRequestResponseDto;
//# sourceMappingURL=list-applications.dto.js.map