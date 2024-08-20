import { JwtService as BaseJwtService } from '@nestjs/jwt';
import { BrokerDto } from 'src/models/brokers/broker.dto';
import { UserType } from 'src/enums/user-type.enum';
export declare class JwtService {
    private baseJwtService;
    constructor(baseJwtService: BaseJwtService);
    generateBrokerToken(broker: BrokerDto, expiresIn?: string): string;
    generateToken(user: BrokerDto, userType: UserType, expiresIn?: string): string;
    verifyToken(token: string): any;
}
