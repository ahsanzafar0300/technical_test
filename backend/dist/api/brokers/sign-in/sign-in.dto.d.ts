import { SuccessResponseDto } from 'src/common/responses';
export declare class BrokerSignInBodyDto {
    email: string;
    password: string;
}
export declare class BrokerSignInResponseDto extends SuccessResponseDto {
    token: string;
}
export declare class BrokerSignInBadRequestResponseDto {
    readonly message: string;
}
