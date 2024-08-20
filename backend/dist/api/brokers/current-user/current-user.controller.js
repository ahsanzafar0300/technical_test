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
exports.BrokerCurrentUserController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const current_user_dto_1 = require("./current-user.dto");
const broker_dto_1 = require("../../../models/brokers/broker.dto");
const broker_guard_1 = require("../broker.guard");
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../../../common/constants/response-messages");
const responses_1 = require("../../../common/responses");
const user_1 = require("../../../common/decorators/user");
let BrokerCurrentUserController = class BrokerCurrentUserController {
    async find(user) {
        return {
            success: true,
            broker: user,
        };
    }
};
__decorate([
    (0, common_1.Get)('current-user'),
    (0, common_1.UseGuards)(broker_guard_1.BrokerGuard),
    (0, swagger_1.ApiBearerAuth)('BROKER'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: "Fetches the current user's information if their token is valid",
        description: "Fetches the information stached in the user's JWT token to expose that information to clients",
    }),
    (0, swagger_1.ApiOkResponse)({
        type: current_user_dto_1.BrokerCurrentUserResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./current-user.dto").BrokerCurrentUserResponseDto }),
    __param(0, (0, user_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDto]),
    __metadata("design:returntype", Promise)
], BrokerCurrentUserController.prototype, "find", null);
BrokerCurrentUserController = __decorate([
    (0, common_1.Controller)('brokers'),
    (0, swagger_1.ApiTags)('Broker API')
], BrokerCurrentUserController);
exports.BrokerCurrentUserController = BrokerCurrentUserController;
//# sourceMappingURL=current-user.controller.js.map