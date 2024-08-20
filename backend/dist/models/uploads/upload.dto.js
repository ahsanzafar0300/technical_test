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
exports.UploadDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UploadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, applicationId: { required: false, type: () => Number }, brokerId: { required: false, type: () => Number }, file: { required: false, type: () => Object }, taskId: { required: false, type: () => Number }, createdAt: { required: false, type: () => Date }, updatedAt: { required: false, type: () => Date } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The primary key for the row',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The application id',
        type: String,
        format: 'uuid',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadDto.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The broker id performing the upload',
        type: String,
        format: 'uuid',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadDto.prototype, "brokerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The file uploaded for the task' }),
    (0, class_validator_1.IsDataURI)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Buffer)
], UploadDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The task id the upload is for',
        type: String,
        format: 'uuid',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date the row was created',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UploadDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The date the row was last modified',
        type: Date,
        format: 'date-time',
    }),
    (0, class_transformer_1.Exclude)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UploadDto.prototype, "updatedAt", void 0);
exports.UploadDto = UploadDto;
//# sourceMappingURL=upload.dto.js.map