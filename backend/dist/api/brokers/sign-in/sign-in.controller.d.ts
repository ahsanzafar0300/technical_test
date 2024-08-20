import { Broker } from 'src/models/brokers/broker.entity';
import { BrokerSignInBodyDto, BrokerSignInResponseDto } from './sign-in.dto';
import { JwtService } from 'src/config/jwt/jwt.service';
export declare class BrokerSignInController {
    private brokerEntity;
    private readonly jwtService;
    constructor(brokerEntity: typeof Broker, jwtService: JwtService);
    post(body: BrokerSignInBodyDto): Promise<BrokerSignInResponseDto>;
}
