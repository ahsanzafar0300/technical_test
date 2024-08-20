"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DtoValidationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../logger/logger");
const class_validator_1 = require("class-validator");
const param_case_1 = require("param-case");
const class_transformer_1 = require("class-transformer");
const list_applications_dto_1 = require("../../api/brokers/applications/list-applications/list-applications.dto");
let DtoValidationPipe = DtoValidationPipe_1 = class DtoValidationPipe {
    constructor() {
        this.logger = new logger_1.CustomLogger(DtoValidationPipe_1.name);
    }
    async transform(value, { metatype }) {
        var _a;
        if (!value || !Object.keys(value).length) {
            return;
        }
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        if (metatype === list_applications_dto_1.BrokerApplicationsListRequestDto) {
            value.status = (_a = value.status) === null || _a === void 0 ? void 0 : _a.split(',');
        }
        const object = (0, class_transformer_1.plainToInstance)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            throw new common_1.HttpException(this.formatErrors(errors), common_1.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Date, Object];
        return !types.includes(metatype);
    }
    formatErrors(validationErrors) {
        if (!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length)) {
            return;
        }
        const errors = [];
        validationErrors.forEach((error) => {
            const constraintKeys = Object.keys(error.constraints);
            const property = (0, param_case_1.paramCase)(error.property);
            let errorMessage;
            if (error.constraints[constraintKeys[0]].endsWith('-error')) {
                errorMessage = error.constraints[constraintKeys[0]];
            }
            else if (error.value === undefined || error.value === null) {
                errorMessage = `missing-${property}-error`;
            }
            else {
                errorMessage = `invalid-${property}-error`;
            }
            if (errors.indexOf(errorMessage) === -1) {
                errors.push(errorMessage);
            }
        });
        return errors.length === 1 ? errors[0] : errors;
    }
};
DtoValidationPipe = DtoValidationPipe_1 = __decorate([
    (0, common_1.Injectable)()
], DtoValidationPipe);
exports.DtoValidationPipe = DtoValidationPipe;
//# sourceMappingURL=dto-validation.pipe.js.map