import { BrokerDto } from 'src/models/brokers/broker.dto';
import { BrokerTasksUpdateBodyDto, BrokerTasksUpdateQueryDto, BrokerTasksUpdateResponseDto } from './update-task.dto';
import { Task } from 'src/models/tasks/task.entity';
export declare class BrokerTasksUpdateController {
    private taskEntity;
    constructor(taskEntity: typeof Task);
    update(user: BrokerDto, query: BrokerTasksUpdateQueryDto, body: BrokerTasksUpdateBodyDto): Promise<BrokerTasksUpdateResponseDto>;
}
