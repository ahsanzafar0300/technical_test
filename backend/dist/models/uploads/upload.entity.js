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
exports.Upload = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const application_entity_1 = require("../applications/application.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const broker_entity_1 = require("../brokers/broker.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const task_entity_1 = require("../tasks/task.entity");
let Upload = class Upload extends sequelize_typescript_1.Model {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, uploadId: { required: true, type: () => String }, application: { required: true, type: () => require("../applications/application.entity").Application }, applicationId: { required: true, type: () => Number }, broker: { required: false, type: () => require("../brokers/broker.entity").Broker }, brokerId: { required: false, type: () => Number }, file: { required: true, type: () => Object }, task: { required: true, type: () => require("../tasks/task.entity").Task }, taskId: { required: false, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: false, type: () => Date } };
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The primary key for the row',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Upload.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const id = this.getDataValue('id');
            return `U${id.toString().padStart(5, '0')}`;
        },
    }),
    __metadata("design:type", String)
], Upload.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The application the task belongs to' }),
    (0, sequelize_typescript_1.BelongsTo)(() => application_entity_1.Application, 'applicationId'),
    __metadata("design:type", application_entity_1.Application)
], Upload.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The application id',
        type: String,
        format: 'uuid',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => application_entity_1.Application),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'application_id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Upload.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The broker performing the upload' }),
    (0, sequelize_typescript_1.BelongsTo)(() => broker_entity_1.Broker, 'brokerId'),
    __metadata("design:type", broker_entity_1.Broker)
], Upload.prototype, "broker", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The broker id performing the upload',
        type: String,
        format: 'uuid',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => broker_entity_1.Broker),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'broker_id' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Upload.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The file uploaded for the task' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BLOB }),
    __metadata("design:type", Buffer)
], Upload.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The task the upload is for' }),
    (0, sequelize_typescript_1.BelongsTo)(() => task_entity_1.Task, 'taskId'),
    __metadata("design:type", task_entity_1.Task)
], Upload.prototype, "task", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The task id the upload is for',
        type: String,
        format: 'uuid',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => task_entity_1.Task),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'task_id' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Upload.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date the row was created',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Upload.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The date the row was last modified',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], Upload.prototype, "updatedAt", void 0);
Upload = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'uploads',
        timestamps: true,
    })
], Upload);
exports.Upload = Upload;
//# sourceMappingURL=upload.entity.js.map