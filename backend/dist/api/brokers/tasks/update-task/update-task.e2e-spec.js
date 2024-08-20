"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const response_messages_1 = require("../../../../common/constants/response-messages");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../../../config/jwt/jwt.service");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const test_helper_1 = require("../../../../test.helper");
const file = Buffer.from('file contents').toString('base64');
describe('/brokers/tasks/update-task', () => {
    let app;
    let jwtService;
    let sequelize;
    beforeAll(async () => {
        app = await (0, test_helper_1.getTestApp)();
        sequelize = app === null || app === void 0 ? void 0 : app.get('SEQUELIZE');
        jwtService = app.get(jwt_service_1.JwtService);
        await sequelize.models.Upload.destroy({
            where: {
                taskId: 3,
            },
        });
        const task3 = await sequelize.models.Task.findByPk(3);
        task3.status = task_status_enum_1.TaskStatus.Pending;
        task3.save();
    });
    describe('/brokers/tasks/update-task (PATCH)', () => {
        it('should reject no token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer()).patch('/brokers/tasks/update-task?taskId=1').send({
                file,
                complete: true,
            });
            expect(status).toBe(common_1.HttpStatus.UNAUTHORIZED);
            expect(message).toBe(response_messages_1.AUTH_ERROR);
        });
        it('should reject invalid token', async () => {
            const { status, body: { message }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=1')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer invalid-token`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.INVALID_JWT_TOKEN_ERROR);
        });
        it('should reject invalid task id', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { message }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=invalid')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.INVALID_TASK_ID_ERROR);
        });
        it('should reject task not associated with broker', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { message }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=7')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.INVALID_USER_ERROR);
        });
        it('should reject task that is not pending', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { message }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=2')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.TASK_SUBMITTED_ERROR);
        });
        it('should reject task with too many uploads', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { message }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=1')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.BAD_REQUEST);
            expect(message).toBe(response_messages_1.TASK_UPLOADS_EXCEEDED_ERROR);
        });
        it('should upload file and leave task pending', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { success }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=3')
                .send({
                file,
                complete: false,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.OK);
            expect(success).toBe(true);
            const task = (await sequelize.models.Task.findByPk(3));
            expect(task.status).toBe(task_status_enum_1.TaskStatus.Pending);
        });
        it('should upload file and complete task', async () => {
            const broker = (await sequelize.models.Broker.findByPk(1));
            const token = jwtService.generateBrokerToken(broker);
            const { status, body: { success }, } = await request(app.getHttpServer())
                .patch('/brokers/tasks/update-task?taskId=3')
                .send({
                file,
                complete: true,
            })
                .set('authorization', `Bearer ${token}`);
            expect(status).toBe(common_1.HttpStatus.OK);
            expect(success).toBe(true);
            const task = (await sequelize.models.Task.findByPk(3));
            expect(task.status).toBe(task_status_enum_1.TaskStatus.ReviewRequired);
        });
    });
});
//# sourceMappingURL=update-task.e2e-spec.js.map