import { BrokerCurrentUserResponseDto } from './current-user.dto';
import { BrokerDto } from 'src/models/brokers/broker.dto';
export declare class BrokerCurrentUserController {
    find(user: BrokerDto): Promise<BrokerCurrentUserResponseDto>;
}
