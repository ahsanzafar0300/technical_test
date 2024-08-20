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
exports.BrokerSignInController = void 0;
const openapi = require("@nestjs/swagger");
const bcrypt = require("bcryptjs");
const response_messages_1 = require("../../../common/constants/response-messages");
const swagger_1 = require("@nestjs/swagger");
const repositories_1 = require("../../../common/constants/repositories");
const common_1 = require("@nestjs/common");
const sign_in_dto_1 = require("./sign-in.dto");
const broker_status_enum_1 = require("../../../enums/broker-status.enum");
const responses_1 = require("../../../common/responses");
const jwt_service_1 = require("../../../config/jwt/jwt.service");
const public_1 = require("../../../common/decorators/public");
const swagger_2 = require("../../../common/swagger");
let BrokerSignInController = class BrokerSignInController {
    constructor(brokerEntity, jwtService) {
        this.brokerEntity = brokerEntity;
        this.jwtService = jwtService;
    }
    async post(body) {
        const { email, password } = body;
        const user = await this.brokerEntity.findOne({
            where: {
                email,
            },
        });
        if (!(user === null || user === void 0 ? void 0 : user.id)) {
            throw new common_1.HttpException(response_messages_1.EMAIL_NOT_FOUND_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        const validPassword = bcrypt.compareSync(password, user.passwordHash);
        if (validPassword === false) {
            throw new common_1.HttpException(response_messages_1.INVALID_PASSWORD_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        if (user.brokerStatus !== broker_status_enum_1.BrokerStatus.Active) {
            throw new common_1.HttpException(response_messages_1.ACCOUNT_NOT_ACTIVE_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        const token = await this.jwtService.generateBrokerToken(user);
        return {
            success: true,
            token,
        };
    }
};
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, public_1.Public)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Authenticates a broker',
        description: 'Brokers can create a session token using their email and password.  Their accounts must be active.',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        type: sign_in_dto_1.BrokerSignInResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: sign_in_dto_1.BrokerSignInBadRequestResponseDto,
        description: (0, swagger_2.formatResponseTable)({}),
    }),
    (0, swagger_1.ApiBody)({
        type: sign_in_dto_1.BrokerSignInBodyDto,
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./sign-in.dto").BrokerSignInResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.BrokerSignInBodyDto]),
    __metadata("design:returntype", Promise)
], BrokerSignInController.prototype, "post", null);
BrokerSignInController = __decorate([
    (0, common_1.Controller)('brokers'),
    (0, swagger_1.ApiTags)('Broker API'),
    __param(0, (0, common_1.Inject)(repositories_1.BROKER_REPOSITORY)),
    __metadata("design:paramtypes", [Object, jwt_service_1.JwtService])
], BrokerSignInController);
exports.BrokerSignInController = BrokerSignInController;
//# sourceMappingURL=sign-in.controller.js.map