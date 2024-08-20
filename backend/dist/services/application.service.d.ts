import { Application } from 'src/models/applications/application.entity';
import { ApplicationDto } from 'src/api/brokers/applications/list-applications/list-applications.dto';
export declare class ApplicationService {
    private applicationRepository;
    constructor(applicationRepository: typeof Application);
    getAllApplications(): Promise<Application[]>;
    createApplication(dto: ApplicationDto): Promise<Application>;
}
