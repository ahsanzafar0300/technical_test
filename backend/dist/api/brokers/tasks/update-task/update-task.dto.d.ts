import { SuccessResponseDto } from 'src/common/responses';
export declare class BrokerTasksUpdateQueryDto {
    taskId: number;
}
export declare class BrokerTasksUpdateBodyDto {
    file: string;
    complete?: boolean;
}
export declare class BrokerTasksUpdateResponseDto extends SuccessResponseDto {
}
export declare const UPDATE_TASK_ERRORS: string[];
export declare class BrokerTasksUpdateBadRequestResponseDto {
    message: string;
}
