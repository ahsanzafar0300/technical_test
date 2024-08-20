"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerTasksModule = void 0;
const list_tasks_module_1 = require("./list-tasks/list-tasks.module");
const update_task_module_1 = require("./update-task/update-task.module");
const common_1 = require("@nestjs/common");
let BrokerTasksModule = class BrokerTasksModule {
};
BrokerTasksModule = __decorate([
    (0, common_1.Module)({
        imports: [list_tasks_module_1.BrokerTasksListModule, update_task_module_1.BrokerTasksUpdateModule],
    })
], BrokerTasksModule);
exports.BrokerTasksModule = BrokerTasksModule;
//# sourceMappingURL=tasks.module.js.map