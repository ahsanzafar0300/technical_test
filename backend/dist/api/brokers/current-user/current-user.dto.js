"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerCurrentUserResponseDto = exports.BrokerCurrentUserDto = void 0;
const openapi = require("@nestjs/swagger");
const broker_entity_1 = require("../../../models/brokers/broker.entity");
const swagger_1 = require("@nestjs/swagger");
const responses_1 = require("../../../common/responses");
class BrokerCurrentUserDto extends (0, swagger_1.PickType)(broker_entity_1.Broker, [
    'createdAt',
    'id',
    'email',
    'mobilePhoneNumber',
    'firstName',
    'lastName',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BrokerCurrentUserDto = BrokerCurrentUserDto;
class BrokerCurrentUserResponseDto extends responses_1.SuccessResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { broker: { required: true, type: () => require("./current-user.dto").BrokerCurrentUserDto } };
    }
}
exports.BrokerCurrentUserResponseDto = BrokerCurrentUserResponseDto;
//# sourceMappingURL=current-user.dto.js.map