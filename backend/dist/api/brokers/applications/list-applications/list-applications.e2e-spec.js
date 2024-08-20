"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const response_messages_1 = require("../../../../common/constants/response-messages");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../../../config/jwt/jwt.service");
const test_helper_1 = require("../../../../test.helper");
describe('/brokers/applications/list-applications', () => {
    let app;
    let jwtService;
    let sequelize;
    beforeAll(async () => {
        app = await (0, test_helper_1.getTestApp)();
        sequelize = app === null || app === void 0 ? void 0 : app.get('SEQUELIZE');
        jwtService = app.get(jwt_service_1.JwtService);
    });
    describe('/brokers/applications/list-applications (GET)', () => {
        it('should reject no token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer()).get('/brokers/applications/list-applications');
            expect(status).toBe(common_1.HttpStatus.UNAUTHORIZED);
            expect(message).toBe(response_messages_1.AUTH_ERROR);
        });
        it('should reject invalid token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer())
                .get('/brokers/applications/list-applications')
                .set('authorization', `Bearer invalid-token`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.INVALID_JWT_TOKEN_ERROR);
        });
        it('should list applications', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { body: { applications }, } = await request(app.getHttpServer())
                .get('/brokers/applications/list-applications')
                .set('authorization', `Bearer ${token}`);
            expect(applications === null || applications === void 0 ? void 0 : applications.length).toBe(2);
        });
    });
});
//# sourceMappingURL=list-applications.e2e-spec.js.map