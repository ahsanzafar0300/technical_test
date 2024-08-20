"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const api_module_1 = require("./api/api.module");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const jwt_module_1 = require("./config/jwt/jwt.module");
const common_1 = require("@nestjs/common");
const ignoreEnvFile = process.env.NODE_ENV === 'prod';
const envFilePath = process.env.NODE_ENV !== 'prod' ? '.env' : undefined;
let AppModule = class AppModule {
    configure() { }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: [envFilePath],
                ignoreEnvFile,
                isGlobal: true,
                expandVariables: true,
            }),
            database_module_1.DatabaseModule,
            api_module_1.APIModule,
            {
                module: jwt_module_1.JwtModule,
                global: true,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map