import { Broker } from 'src/models/brokers/broker.entity';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from 'src/config/jwt/jwt.service';
import { Reflector } from '@nestjs/core';
export declare class BrokerGuard implements CanActivate {
    private readonly brokerEntity;
    private readonly jwtService;
    private readonly reflector;
    constructor(brokerEntity: typeof Broker, jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
