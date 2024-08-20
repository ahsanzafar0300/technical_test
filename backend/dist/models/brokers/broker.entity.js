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
exports.Broker = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const broker_status_enum_1 = require("../../enums/broker-status.enum");
const sequelize_typescript_1 = require("sequelize-typescript");
const class_validator_1 = require("class-validator");
const state_enum_1 = require("../../enums/state.enum");
let Broker = class Broker extends sequelize_typescript_1.Model {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, brokerId: { required: true, type: () => String }, addressLine1: { required: true, type: () => String }, addressLine2: { required: false, type: () => String }, addressCity: { required: true, type: () => String }, addressPostCode: { required: true, type: () => String }, addressState: { required: true, enum: require("../../enums/state.enum").State }, australianCreditLicense: { required: true, type: () => String }, brokerFee: { required: true, type: () => Number }, brokerFirm: { required: true, type: () => String }, brokerStatus: { required: true, enum: require("../../enums/broker-status.enum").BrokerStatus }, creditationNumber: { required: true, type: () => String }, dateOfBirth: { required: true, type: () => Date }, email: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, mobilePhoneNumber: { required: true, type: () => String }, passwordHash: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: false, type: () => Date } };
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The primary key for the row',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Broker.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const id = this.getDataValue('id');
            return `A${id.toString().padStart(5, '0')}`;
        },
    }),
    __metadata("design:type", String)
], Broker.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The first line of the broker's business address",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'address_line_1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "addressLine1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "The second line of the broker's business address",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'address_line_2' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Broker.prototype, "addressLine2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The city the broker's business is in" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'address_city' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "addressCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The postal code of the broker's business" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(10),
        field: 'address_post_code',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "addressPostCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "The state or territory the broker's business is in",
        enum: state_enum_1.State,
    }),
    (0, sequelize_typescript_1.Column)({
        field: 'address_state',
        type: 'enum_state',
    }),
    (0, class_validator_1.IsEnum)(state_enum_1.State),
    __metadata("design:type", String)
], Broker.prototype, "addressState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's Australian Credit License number" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'australian_credit_license' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "australianCreditLicense", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's fee" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(5),
        field: 'broker_fee',
        get(...args) {
            const value = this.getDataValue(args[0]);
            return value === null ? null : parseFloat(value);
        },
    }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], Broker.prototype, "brokerFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's firm" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'broker_firm' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "brokerFirm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's status active/inactive/etc", enum: broker_status_enum_1.BrokerStatus }),
    (0, sequelize_typescript_1.Column)({
        field: 'broker_status',
        type: 'enum_broker_status',
        defaultValue: broker_status_enum_1.BrokerStatus.Inactive,
    }),
    (0, class_validator_1.IsEnum)(broker_status_enum_1.BrokerStatus),
    __metadata("design:type", String)
], Broker.prototype, "brokerStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's Credit Representative number" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'credit_representative_number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "creditationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's date-of-birth" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: 'date_of_birth' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Broker.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's email address" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(50),
        validate: { isEmail: true },
        unique: true,
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Broker.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's first name" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'first_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's last name" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), field: 'last_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's mobile phone number" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(20),
        field: 'mobile_phone_number',
        unique: true,
    }),
    (0, class_validator_1.IsMobilePhone)('en-AU'),
    __metadata("design:type", String)
], Broker.prototype, "mobilePhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "The broker's sign-in password" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(70),
        field: 'password_hash',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Broker.prototype, "passwordHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The date the row was created', type: Date, format: 'date-time' }),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Broker.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The date the row was last modified', type: Date, format: 'date-time' }),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], Broker.prototype, "updatedAt", void 0);
Broker = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'brokers',
        timestamps: true,
    })
], Broker);
exports.Broker = Broker;
//# sourceMappingURL=broker.entity.js.map