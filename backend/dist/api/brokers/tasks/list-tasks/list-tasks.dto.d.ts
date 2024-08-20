import { SuccessResponseDto } from 'src/common/responses';
import { Task } from 'src/models/tasks/task.entity';
import { TaskStatus } from 'src/enums/task-status.enum';
export declare class BrokerTasksListRequestDto {
    readonly status?: TaskStatus;
    readonly minimumDateDue?: Date;
    readonly maximumDateDue?: Date;
    readonly minimumDateCompleted?: Date;
    readonly maximumDateCompleted?: Date;
}
declare const BrokerTask_base: import("@nestjs/common").Type<Pick<Task, "id" | "createdAt" | "title" | "status">>;
export declare class BrokerTask extends BrokerTask_base {
}
export declare class BrokerTasksListResponseDto extends SuccessResponseDto {
    readonly tasks: BrokerTask[];
}
export declare class BrokerTasksListBrokerApplicationsListBadRequestResponseDto {
    readonly message: string;
}
export {};
