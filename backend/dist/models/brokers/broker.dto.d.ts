import { BrokerStatus } from 'src/enums/broker-status.enum';
import { State } from 'src/enums/state.enum';
export declare class BrokerDto {
    id?: number;
    addressLine1?: string;
    addressLine2?: string;
    addressCity?: string;
    addressPostCode?: string;
    addressState?: State;
    australianCreditLicense?: string;
    brokerFee?: number;
    brokerFirm?: string;
    brokerStatus?: BrokerStatus;
    creditationNumber?: string;
    dateOfBirth?: Date;
    email?: string;
    firstName?: string;
    lastName?: string;
    mobilePhoneNumber?: string;
    passwordHash?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
