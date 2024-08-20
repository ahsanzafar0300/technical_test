"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadDataModule = void 0;
const database_module_1 = require("../../database/database.module");
const common_1 = require("@nestjs/common");
const uploads_provider_1 = require("./uploads.provider");
let UploadDataModule = class UploadDataModule {
};
UploadDataModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: uploads_provider_1.uploadProviders,
        exports: [database_module_1.DatabaseModule],
    })
], UploadDataModule);
exports.UploadDataModule = UploadDataModule;
//# sourceMappingURL=uploads.module.js.map