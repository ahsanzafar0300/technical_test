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
exports.JwtService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const user_type_enum_1 = require("../../enums/user-type.enum");
let JwtService = class JwtService {
    constructor(baseJwtService) {
        this.baseJwtService = baseJwtService;
    }
    generateBrokerToken(broker, expiresIn) {
        return this.generateToken(broker, user_type_enum_1.UserType.Broker, expiresIn);
    }
    generateToken(user, userType, expiresIn) {
        return this.baseJwtService.sign({
            userType,
            id: user.id,
            email: user.email,
            mobilePhoneNumber: user.mobilePhoneNumber,
            createdAt: user.createdAt,
        }, {
            expiresIn: expiresIn || process.env.JWT_EXPIRES_IN || '1d',
            secret: process.env.JWT_SECRET || 'secret',
        });
    }
    verifyToken(token) {
        return this.baseJwtService.verify(token, {
            secret: process.env.JWT_SECRET || 'secret',
        });
    }
};
JwtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map