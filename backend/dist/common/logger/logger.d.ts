import { ConsoleLogger } from '@nestjs/common';
export declare class CustomLogger extends ConsoleLogger {
    error(error: Error, ...rest: any[]): void;
    log(message: string, ...rest: any[]): void;
    warn(message: string, ...rest: any[]): void;
    notify(message: string): void;
}
