import { Application } from 'src/models/applications/application.entity';
import { ApplicationDto, BrokerApplicationPostResponseDto, BrokerApplicationsListRequestDto, BrokerApplicationsListResponseDto } from './list-applications.dto';
import { BrokerDto } from 'src/models/brokers/broker.dto';
import { ApplicationService } from 'src/services/application.service';
export declare class BrokerApplicationsListController {
    private applicationEntity;
    private applicationService;
    constructor(applicationEntity: typeof Application, applicationService: ApplicationService);
    find(user: BrokerDto, query: BrokerApplicationsListRequestDto): Promise<BrokerApplicationsListResponseDto>;
    post(user: BrokerDto, body: ApplicationDto): Promise<BrokerApplicationPostResponseDto>;
}
