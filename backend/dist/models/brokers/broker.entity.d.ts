import { BrokerStatus } from 'src/enums/broker-status.enum';
import { Model } from 'sequelize-typescript';
import { State } from 'src/enums/state.enum';
export declare class Broker extends Model<Broker> {
    id: number;
    brokerId: string;
    addressLine1: string;
    addressLine2?: string;
    addressCity: string;
    addressPostCode: string;
    addressState: State;
    australianCreditLicense: string;
    brokerFee: number;
    brokerFirm: string;
    brokerStatus: BrokerStatus;
    creditationNumber: string;
    dateOfBirth: Date;
    email: string;
    firstName: string;
    lastName: string;
    mobilePhoneNumber: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt?: Date;
}
