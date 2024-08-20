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
exports.BrokerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const broker_status_enum_1 = require("../../enums/broker-status.enum");
const class_validator_1 = require("class-validator");
const state_enum_1 = require("../../enums/state.enum");
class BrokerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, addressLine1: { required: false, type: () => String }, addressLine2: { required: false, type: () => String }, addressCity: { required: false, type: () => String }, addressPostCode: { required: false, type: () => String }, addressState: { required: false, enum: require("../../enums/state.enum").State }, australianCreditLicense: { required: false, type: () => String }, brokerFee: { required: false, type: () => Number }, brokerFirm: { required: false, type: () => String }, brokerStatus: { required: false, enum: require("../../enums/broker-status.enum").BrokerStatus }, creditationNumber: { required: false, type: () => String }, dateOfBirth: { required: false, type: () => Date }, email: { required: false, type: () => String }, firstName: { required: false, type: () => String }, lastName: { required: false, type: () => String }, mobilePhoneNumber: { required: false, type: () => String }, passwordHash: { required: false, type: () => String }, createdAt: { required: false, type: () => Date }, updatedAt: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The primary key for the row',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BrokerDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "The first line of the broker's business address",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "addressLine1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "The second line of the broker's business address",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "addressLine2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The city the broker's business is in" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "addressCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The postal code of the broker's business" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "addressPostCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "The state or territory the broker's business is in",
        enum: state_enum_1.State,
    }),
    (0, class_validator_1.IsEnum)(state_enum_1.State),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "addressState", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's Australian Credit License number" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "australianCreditLicense", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's fee" }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BrokerDto.prototype, "brokerFee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's firm" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "brokerFirm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's status active/inactive/etc", enum: broker_status_enum_1.BrokerStatus }),
    (0, class_validator_1.IsEnum)(broker_status_enum_1.BrokerStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "brokerStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's Credit Representative number" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "creditationNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's date-of-birth" }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's email address" }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's first name" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's last name" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's mobile phone number" }),
    (0, class_validator_1.IsMobilePhone)('en-AU'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "mobilePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "The broker's sign-in password" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BrokerDto.prototype, "passwordHash", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The date the row was created', type: Date, format: 'date-time' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The date the row was last modified', type: Date, format: 'date-time' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], BrokerDto.prototype, "updatedAt", void 0);
exports.BrokerDto = BrokerDto;
//# sourceMappingURL=broker.dto.js.map