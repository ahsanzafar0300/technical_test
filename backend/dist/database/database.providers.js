"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_list_1 = require("../models/models.list");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelizeOptions = {
                dialect: 'postgres',
                dialectOptions: {
                    idle_in_transaction_session_timeout: 60000,
                },
                logging: process.env.DEBUG_SEQUELIZE ? console.log : false,
                pool: {
                    max: 10,
                    min: 0,
                    idle: 1000,
                    evict: 2000,
                    acquire: 3000,
                },
                schema: process.env.DATABASE_SCHEMA || 'public',
                models: models_list_1.models,
            };
            return new sequelize_typescript_1.Sequelize(process.env.DATABASE_URL, sequelizeOptions);
        },
    },
];
//# sourceMappingURL=database.providers.js.map