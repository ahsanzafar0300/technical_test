import { Application } from '../applications/application.entity';
import { Model } from 'sequelize-typescript';
import { Broker } from '../brokers/broker.entity';
import { TaskStatus } from 'src/enums/task-status.enum';
import { Upload } from '../uploads/upload.entity';
import { UserType } from 'src/enums/user-type.enum';
export declare class Task extends Model<Task> {
    id: number;
    taskId: string;
    application: Application;
    applicationId: number;
    assignedTo: UserType;
    assignedToBroker: Broker;
    assignedToBrokerId?: number;
    completedDate?: Date;
    dueDate: Date;
    status: TaskStatus;
    title: string;
    uploads: Upload[];
    createdAt: Date;
    updatedAt?: Date;
}
