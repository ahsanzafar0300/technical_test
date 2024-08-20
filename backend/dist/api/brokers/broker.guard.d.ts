import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from 'src/config/jwt/jwt.service';
import { Reflector } from '@nestjs/core';
export declare class BrokerGuard implements CanActivate {
    private readonly jwtService;
    private readonly reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
