"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerSignInModule = void 0;
const sign_in_controller_1 = require("./sign-in.controller");
const database_module_1 = require("../../../database/database.module");
const jwt_module_1 = require("../../../config/jwt/jwt.module");
const common_1 = require("@nestjs/common");
let BrokerSignInModule = class BrokerSignInModule {
};
BrokerSignInModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, jwt_module_1.JwtModule],
        controllers: [sign_in_controller_1.BrokerSignInController],
    })
], BrokerSignInModule);
exports.BrokerSignInModule = BrokerSignInModule;
//# sourceMappingURL=sign-in.module.js.map