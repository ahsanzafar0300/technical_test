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
exports.BrokerTasksListController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const application_entity_1 = require("../../../../models/applications/application.entity");
const broker_dto_1 = require("../../../../models/brokers/broker.dto");
const broker_guard_1 = require("../../broker.guard");
const list_tasks_dto_1 = require("./list-tasks.dto");
const common_1 = require("@nestjs/common");
const response_messages_1 = require("../../../../common/constants/response-messages");
const responses_1 = require("../../../../common/responses");
const sequelize_1 = require("sequelize");
const repositories_1 = require("../../../../common/constants/repositories");
const task_status_enum_1 = require("../../../../enums/task-status.enum");
const query_filters_1 = require("../../../../common/query-filters");
const swagger_2 = require("../../../../common/swagger");
const user_1 = require("../../../../common/decorators/user");
let BrokerTasksListController = class BrokerTasksListController {
    constructor(taskEntity) {
        this.taskEntity = taskEntity;
    }
    async find(user, query) {
        let dueDateFilter;
        try {
            dueDateFilter = (0, query_filters_1.createDateFilter)('dueDate', query.minimumDateDue, query.maximumDateDue);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
        let completedDateFilter;
        try {
            completedDateFilter = (0, query_filters_1.createDateFilter)('completedDate', query.minimumDateCompleted, query.maximumDateCompleted);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
        const statusFilter = {};
        if (query === null || query === void 0 ? void 0 : query.status) {
            statusFilter.status = query.status;
        }
        const tasks = await this.taskEntity.findAll({
            where: Object.assign(Object.assign(Object.assign({ assignedToBrokerId: user.id }, statusFilter), dueDateFilter), completedDateFilter),
            include: [
                {
                    model: application_entity_1.Application,
                    attributes: ['id', 'createdAt', 'status', 'loanAmount', 'loanDuration'],
                    where: {
                        status: {
                            [sequelize_1.Op.ne]: task_status_enum_1.TaskStatus.Cancelled,
                        },
                    },
                },
            ],
        });
        return {
            success: true,
            tasks,
        };
    }
};
__decorate([
    (0, common_1.Get)('list-tasks'),
    (0, common_1.UseGuards)(broker_guard_1.BrokerGuard),
    (0, swagger_1.ApiBearerAuth)('BROKER'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Finds applications belonging to a broker',
        description: 'Uses various querystring parameters to filter the applications associated with a broker',
    }),
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        type: list_tasks_dto_1.BrokerTasksListResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        type: responses_1.InternalServerErrorResponseDto,
        description: `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when the result could not be computed`,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: list_tasks_dto_1.BrokerTasksListBrokerApplicationsListBadRequestResponseDto,
        description: (0, swagger_2.formatResponseTable)({}),
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./list-tasks.dto").BrokerTasksListResponseDto }),
    __param(0, (0, user_1.default)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDto, list_tasks_dto_1.BrokerTasksListRequestDto]),
    __metadata("design:returntype", Promise)
], BrokerTasksListController.prototype, "find", null);
BrokerTasksListController = __decorate([
    (0, common_1.Controller)('brokers/tasks'),
    (0, swagger_1.ApiTags)('Broker API'),
    __param(0, (0, common_1.Inject)(repositories_1.TASK_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BrokerTasksListController);
exports.BrokerTasksListController = BrokerTasksListController;
//# sourceMappingURL=list-tasks.controller.js.map