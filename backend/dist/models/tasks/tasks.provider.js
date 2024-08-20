"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProviders = void 0;
const repositories_1 = require("../../common/constants/repositories");
const task_entity_1 = require("./task.entity");
exports.taskProviders = [
    {
        provide: repositories_1.TASK_REPOSITORY,
        useValue: task_entity_1.Task,
    },
];
//# sourceMappingURL=tasks.provider.js.map