"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const applications_module_1 = require("./applications/applications.module");
const brokers_module_1 = require("./brokers/brokers.module");
const common_1 = require("@nestjs/common");
const tasks_module_1 = require("./tasks/tasks.module");
const uploads_module_1 = require("./uploads/uploads.module");
let ModelsModule = class ModelsModule {
};
ModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [applications_module_1.ApplicationsDataModule, brokers_module_1.BrokersDataModule, tasks_module_1.TasksDataModule, uploads_module_1.UploadDataModule],
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=models.module.js.map