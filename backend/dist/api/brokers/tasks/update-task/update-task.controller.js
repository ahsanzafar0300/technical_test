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
exports.BrokerTasksUpdateController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const broker_dto_1 = require("../../../../models/brokers/broker.dto");
const broker_guard_1 = require("../../broker.guard");
const update_task_dto_1 = require("./update-task.dto");
const response_messages_1 = require("../../../../common/constants/response-messages");
const responses_1 = require("../../../../common/responses");
const repositories_1 = require("../../../../common/constants/repositories");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const upload_entity_1 = require("../../../../models/uploads/upload.entity");
const swagger_2 = require("../../../../common/swagger");
const user_1 = require("../../../../common/decorators/user");
let BrokerTasksUpdateController = class BrokerTasksUpdateController {
    constructor(taskEntity) {
        this.taskEntity = taskEntity;
    }
    async update(user, query, body) {
        var _a;
        const task = await this.taskEntity.findByPk(query.taskId.toString(), {
            include: [upload_entity_1.Upload],
        });
        if (!(task === null || task === void 0 ? void 0 : task.id)) {
            throw new common_1.HttpException(response_messages_1.TASK_NOT_FOUND_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        if (task.assignedToBrokerId !== user.id) {
            throw new common_1.HttpException(response_messages_1.INVALID_USER_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        if (task.status !== task_status_enum_1.TaskStatus.Pending) {
            throw new common_1.HttpException(response_messages_1.TASK_SUBMITTED_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        if (((_a = task.uploads) === null || _a === void 0 ? void 0 : _a.length) === 5) {
            throw new common_1.HttpException(response_messages_1.TASK_UPLOADS_EXCEEDED_ERROR, common_1.HttpStatus.BAD_REQUEST);
        }
        await upload_entity_1.Upload.create({
            applicationId: task.applicationId,
            taskId: task.id,
            brokerId: user.id,
            file: Buffer.from(body.file, 'base64'),
        });
        if (body.complete) {
            task.completedDate = new Date();
            task.status = task_status_enum_1.TaskStatus.ReviewRequired;
            await task.save();
        }
        return {
            success: true,
        };
    }
};
__decorate([
    (0, common_1.Patch)('update-task'),
    (0, common_1.UseGuards)(broker_guard_1.BrokerGuard),
    (0, swagger_1.ApiBearerAuth)('BROKER'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Updates a task with an uploaded file',
        description: 'Uploads a file and if specified as completed sets the task to the review status',
    }),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: update_task_dto_1.BrokerTasksUpdateResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: update_task_dto_1.BrokerTasksUpdateBadRequestResponseDto,
        description: (0, swagger_2.formatResponseTable)({}),
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./update-task.dto").BrokerTasksUpdateResponseDto }),
    __param(0, (0, user_1.default)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDto,
        update_task_dto_1.BrokerTasksUpdateQueryDto,
        update_task_dto_1.BrokerTasksUpdateBodyDto]),
    __metadata("design:returntype", Promise)
], BrokerTasksUpdateController.prototype, "update", null);
BrokerTasksUpdateController = __decorate([
    (0, common_1.Controller)('brokers/tasks'),
    (0, swagger_1.ApiTags)('Broker API'),
    __param(0, (0, common_1.Inject)(repositories_1.TASK_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BrokerTasksUpdateController);
exports.BrokerTasksUpdateController = BrokerTasksUpdateController;
//# sourceMappingURL=update-task.controller.js.map