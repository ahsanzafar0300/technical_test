"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const response_messages_1 = require("../../../common/constants/response-messages");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../../config/jwt/jwt.service");
const test_helper_1 = require("../../../test.helper");
describe('/brokers/current-user', () => {
    let app;
    let jwtService;
    let sequelize;
    beforeAll(async () => {
        app = await (0, test_helper_1.getTestApp)();
        sequelize = app === null || app === void 0 ? void 0 : app.get('SEQUELIZE');
        jwtService = app.get(jwt_service_1.JwtService);
    });
    describe('/brokers/current-user (GET)', () => {
        it('should reject no token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer()).get('/brokers/current-user');
            expect(status).toBe(common_1.HttpStatus.UNAUTHORIZED);
            expect(message).toBe(response_messages_1.AUTH_ERROR);
        });
        it('should reject invalid token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer()).get('/brokers/current-user').set('authorization', `Bearer invalid-token`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.INVALID_JWT_TOKEN_ERROR);
        });
        it('should return user data', async () => {
            var _a, _b;
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const response = await request(app.getHttpServer())
                .get('/brokers/current-user')
                .set('authorization', `Bearer ${token}`);
            expect((_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a.broker) === null || _b === void 0 ? void 0 : _b.id).toBe(broker.id);
        });
    });
});
//# sourceMappingURL=current-user.e2e-spec.js.map