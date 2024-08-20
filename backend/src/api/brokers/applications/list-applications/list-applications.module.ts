import { BrokerApplicationsListController } from './list-applications.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';
import { ApplicationService } from 'src/services/application.service'; // Adjust the import path

@Module({
  imports: [DatabaseModule],
  controllers: [BrokerApplicationsListController],
  providers: [ApplicationService],
})
export class BrokerApplicationsListModule {}
