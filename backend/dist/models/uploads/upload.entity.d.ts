/// <reference types="node" />
import { Application } from '../applications/application.entity';
import { Model } from 'sequelize-typescript';
import { Broker } from '../brokers/broker.entity';
import { Task } from '../tasks/task.entity';
export declare class Upload extends Model<Upload> {
    id: number;
    uploadId: string;
    application: Application;
    applicationId: number;
    broker?: Broker;
    brokerId?: number;
    file: Buffer;
    task: Task;
    taskId?: number;
    createdAt: Date;
    updatedAt?: Date;
}
