"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelProviders = void 0;
const applications_provider_1 = require("./applications/applications.provider");
const brokers_provider_1 = require("./brokers/brokers.provider");
const tasks_provider_1 = require("./tasks/tasks.provider");
exports.modelProviders = [...applications_provider_1.applicationProviders, ...brokers_provider_1.brokerProviders, ...tasks_provider_1.taskProviders];
//# sourceMappingURL=models.provider.js.map