import { BrokerDto } from 'src/models/brokers/broker.dto';
import { BrokerTasksListRequestDto, BrokerTasksListResponseDto } from './list-tasks.dto';
import { Task } from 'src/models/tasks/task.entity';
export declare class BrokerTasksListController {
    private taskEntity;
    constructor(taskEntity: typeof Task);
    find(user: BrokerDto, query: BrokerTasksListRequestDto): Promise<BrokerTasksListResponseDto>;
}
