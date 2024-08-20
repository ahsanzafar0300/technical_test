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
exports.Task = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const application_entity_1 = require("../applications/application.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const broker_entity_1 = require("../brokers/broker.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const task_status_enum_1 = require("../../enums/task-status.enum");
const upload_entity_1 = require("../uploads/upload.entity");
const user_type_enum_1 = require("../../enums/user-type.enum");
let Task = class Task extends sequelize_typescript_1.Model {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, taskId: { required: true, type: () => String }, application: { required: true, type: () => require("../applications/application.entity").Application }, applicationId: { required: true, type: () => Number }, assignedTo: { required: true, enum: require("../../enums/user-type.enum").UserType }, assignedToBroker: { required: true, type: () => require("../brokers/broker.entity").Broker }, assignedToBrokerId: { required: false, type: () => Number }, completedDate: { required: false, type: () => Date }, dueDate: { required: true, type: () => Date }, status: { required: true, enum: require("../../enums/task-status.enum").TaskStatus }, title: { required: true, type: () => String }, uploads: { required: true, type: () => [require("../uploads/upload.entity").Upload] }, createdAt: { required: true, type: () => Date }, updatedAt: { required: false, type: () => Date } };
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
], Task.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
        get() {
            const id = this.getDataValue('id');
            return `T${id.toString().padStart(5, '0')}`;
        },
    }),
    __metadata("design:type", String)
], Task.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The application the task belongs to' }),
    (0, sequelize_typescript_1.BelongsTo)(() => application_entity_1.Application, 'applicationId'),
    __metadata("design:type", application_entity_1.Application)
], Task.prototype, "application", void 0);
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
], Task.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The type of user the task is assigned to', enum: user_type_enum_1.UserType, enumName: 'UserType' }),
    (0, sequelize_typescript_1.Column)({
        type: 'enum_user_type',
        field: 'assigned_to',
    }),
    (0, class_validator_1.IsEnum)(user_type_enum_1.UserType),
    __metadata("design:type", String)
], Task.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The broker the task is assigned to' }),
    (0, sequelize_typescript_1.BelongsTo)(() => broker_entity_1.Broker, 'assignedToBrokerId'),
    __metadata("design:type", broker_entity_1.Broker)
], Task.prototype, "assignedToBroker", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The assigned broker id',
        type: String,
        format: 'uuid',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => broker_entity_1.Broker),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, field: 'assigned_to_broker_id' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Task.prototype, "assignedToBrokerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The date the task was completed' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: 'completed_date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], Task.prototype, "completedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The date the task must be completed by' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: 'due_date' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Task.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The status of the task', enum: task_status_enum_1.TaskStatus, enumName: 'TaskStatus' }),
    (0, sequelize_typescript_1.Column)({
        type: 'enum_task_status',
    }),
    (0, class_validator_1.IsEnum)(task_status_enum_1.TaskStatus),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title of the task' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50) }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The applicant the task is assigned to' }),
    (0, sequelize_typescript_1.HasMany)(() => upload_entity_1.Upload, 'task_id'),
    __metadata("design:type", Array)
], Task.prototype, "uploads", void 0);
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
], Task.prototype, "createdAt", void 0);
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
], Task.prototype, "updatedAt", void 0);
Task = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'tasks',
        timestamps: true,
    })
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map