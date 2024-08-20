"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerGuard = void 0;
const repositories_1 = require("../constants/repositories");
const broker_status_enum_1 = require("../../enums/broker-status.enum");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../config/jwt/jwt.service");
const core_1 = require("@nestjs/core");
let BrokerGuard = class BrokerGuard {
    constructor(brokerEntity, jwtService, reflector) {
        this.brokerEntity = brokerEntity;
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride('public', [context.getHandler(), context.getClass()]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers['authorization'];
        if ((authorization === null || authorization === void 0 ? void 0 : authorization.length) && authorization.startsWith('Bearer ') && authorization !== 'Bearer null') {
            const decryptedToken = this.jwtService.verifyToken(authorization.substring('Bearer '.length));
            const broker = await this.brokerEntity.findByPk(decryptedToken.id);
            if ((broker === null || broker === void 0 ? void 0 : broker.id) && broker.brokerStatus == broker_status_enum_1.BrokerStatus.Active) {
                return true;
            }
        }
        return false;
    }
};
BrokerGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(repositories_1.BROKER_REPOSITORY)),
    __metadata("design:paramtypes", [Object, jwt_service_1.JwtService,
        core_1.Reflector])
], BrokerGuard);
exports.BrokerGuard = BrokerGuard;
//# sourceMappingURL=broker.guard.js.map