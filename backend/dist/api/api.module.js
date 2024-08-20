"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIModule = void 0;
const applications_module_1 = require("./brokers/applications/applications.module");
const current_user_module_1 = require("./brokers/current-user/current-user.module");
const sign_in_module_1 = require("./brokers/sign-in/sign-in.module");
const tasks_module_1 = require("./brokers/tasks/tasks.module");
const common_1 = require("@nestjs/common");
let APIModule = class APIModule {
};
APIModule = __decorate([
    (0, common_1.Module)({
        imports: [applications_module_1.BrokerApplicationsModule, current_user_module_1.BrokerCurrentUserModule, sign_in_module_1.BrokerSignInModule, tasks_module_1.BrokerTasksModule],
    })
], APIModule);
exports.APIModule = APIModule;
//# sourceMappingURL=api.module.js.map