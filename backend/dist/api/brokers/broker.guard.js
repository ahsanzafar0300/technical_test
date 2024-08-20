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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerGuard = void 0;
const response_messages_1 = require("../../common/constants/response-messages");
const broker_entity_1 = require("../../models/brokers/broker.entity");
const broker_status_enum_1 = require("../../enums/broker-status.enum");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../config/jwt/jwt.service");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const user_type_enum_1 = require("../../enums/user-type.enum");
class JwtBrokerDto extends (0, swagger_1.PickType)(broker_entity_1.Broker, ['id', 'firstName', 'lastName', 'email', 'brokerStatus']) {
}
let BrokerGuard = class BrokerGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        var _a;
        const allowUnauthorizedRequest = this.reflector.get('allowUnauthorizedRequest', context.getHandler());
        if (allowUnauthorizedRequest) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = (_a = request.headers['authorization']) === null || _a === void 0 ? void 0 : _a.substring('Bearer '.length);
        if (!(token === null || token === void 0 ? void 0 : token.length)) {
            throw new common_1.HttpException(response_messages_1.AUTH_ERROR, common_1.HttpStatus.UNAUTHORIZED);
        }
        let user;
        try {
            user = await this.jwtService.verifyToken(token);
        }
        catch (error) {
            throw new common_1.HttpException(response_messages_1.INVALID_JWT_TOKEN_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        if ((user === null || user === void 0 ? void 0 : user.userType) !== user_type_enum_1.UserType.Broker) {
            throw new common_1.HttpException(response_messages_1.AUTH_ERROR, common_1.HttpStatus.UNAUTHORIZED);
        }
        const broker = await broker_entity_1.Broker.findByPk(user.id.toString(), {
            attributes: ['id', 'firstName', 'lastName', 'email', 'mobilePhoneNumber', 'brokerStatus', 'createdAt'],
            raw: true,
        });
        if (!(broker === null || broker === void 0 ? void 0 : broker.id)) {
            throw new common_1.HttpException(response_messages_1.AUTH_ERROR, common_1.HttpStatus.UNAUTHORIZED);
        }
        if ((broker === null || broker === void 0 ? void 0 : broker.brokerStatus) !== broker_status_enum_1.BrokerStatus.Active) {
            throw new common_1.HttpException(response_messages_1.AUTH_ERROR, common_1.HttpStatus.UNAUTHORIZED);
        }
        request['user'] = broker;
        return true;
    }
};
BrokerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.JwtService, core_1.Reflector])
], BrokerGuard);
exports.BrokerGuard = BrokerGuard;
//# sourceMappingURL=broker.guard.js.map