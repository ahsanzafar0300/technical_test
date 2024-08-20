"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationProviders = void 0;
const repositories_1 = require("../../common/constants/repositories");
const application_entity_1 = require("./application.entity");
exports.applicationProviders = [
    {
        provide: repositories_1.APPLICATION_REPOSITORY,
        useValue: application_entity_1.Application,
    },
];
//# sourceMappingURL=applications.provider.js.map