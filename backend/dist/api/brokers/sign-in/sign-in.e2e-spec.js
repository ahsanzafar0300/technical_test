"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const response_messages_1 = require("../../../common/constants/response-messages");
const test_helper_1 = require("../../../test.helper");
describe('/brokers/sign-in', () => {
    let app;
    let sequelize;
    beforeAll(async () => {
        app = await (0, test_helper_1.getTestApp)();
        sequelize = app === null || app === void 0 ? void 0 : app.get('SEQUELIZE');
    });
    describe('/brokers/sign-in (POST)', () => {
        it(response_messages_1.INVALID_EMAIL_ERROR, async () => {
            const { body: { message }, } = await request(app.getHttpServer()).post('/brokers/sign-in').send({
                email: 'not-an-email-address',
                password: 'password',
            });
            expect(message).toBe(response_messages_1.INVALID_EMAIL_ERROR);
        });
        it(response_messages_1.EMAIL_NOT_FOUND_ERROR, async () => {
            const { body: { message }, } = await request(app.getHttpServer()).post('/brokers/sign-in').send({
                email: 'unknown@email.com',
                password: 'password',
            });
            expect(message).toBe(response_messages_1.EMAIL_NOT_FOUND_ERROR);
        });
        it(response_messages_1.INVALID_PASSWORD_ERROR, async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const { body: { message }, } = await request(app.getHttpServer()).post('/brokers/sign-in').send({
                email: broker.email,
                password: 'invalid',
            });
            expect(message).toBe(response_messages_1.INVALID_PASSWORD_ERROR);
        });
        it('should return jwt token', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const { body: { token }, } = await request(app.getHttpServer()).post('/brokers/sign-in').send({
                email: broker.email,
                password: 'password',
            });
            expect(token === null || token === void 0 ? void 0 : token.length).toBeGreaterThan(10);
        });
    });
});
//# sourceMappingURL=sign-in.e2e-spec.js.map