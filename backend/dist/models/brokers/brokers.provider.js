"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brokerProviders = void 0;
const repositories_1 = require("../../common/constants/repositories");
const broker_entity_1 = require("./broker.entity");
exports.brokerProviders = [
    {
        provide: repositories_1.BROKER_REPOSITORY,
        useValue: broker_entity_1.Broker,
    },
];
//# sourceMappingURL=brokers.provider.js.map