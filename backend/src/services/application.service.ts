// // import { Injectable, Inject } from '@nestjs/common';
// // import { Application } from 'src/models/applications/application.entity';
// // import { APPLICATION_REPOSITORY } from 'src/common/constants/repositories';
// // import { ApplicationDto } from 'src/api/brokers/applications/list-applications/list-applications.dto';
// // import { ApplicationStatus } from 'src/enums/application-status.enum';

// // @Injectable()
// // export class ApplicationService {
// //   constructor(
// //     @Inject(APPLICATION_REPOSITORY)
// //     private applicationRepository: typeof Application,
// //   ) {}

// //   async createApplication(dto: ApplicationDto): Promise<Application> {
// //     // Add any additional logic you need here, e.g., validation, default values
// //     return this.applicationRepository.create({
// //       ...dto,
// //       status: ApplicationStatus.Submitted,
// //     });
// //   }

// //   // Add more service methods as needed
// // }




// //---------------------------------------------------------------------------------------------------------//technical_test-master

// import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
// import { Application } from 'src/models/applications/application.entity';
// import { APPLICATION_REPOSITORY } from 'src/common/constants/repositories';
// import { ApplicationDto } from 'src/api/brokers/applications/list-applications/list-applications.dto';
// import { ApplicationStatus } from 'src/enums/application-status.enum';

// @Injectable()
// export class ApplicationService {
//   constructor(
//     @Inject(APPLICATION_REPOSITORY)
//     private applicationRepository: typeof Application,
//   ) {}

//   async createApplication(dto: ApplicationDto): Promise<Application> {
//     try {
//       // Validate DTO
//       if (!dto.applicantName) {
//         throw new HttpException('Applicant name is required', HttpStatus.BAD_REQUEST);
//       }

//       // Prepare application data with the correct types
//       const applicationData = {
//         ...dto,
//         status: ApplicationStatus.Submitted,
//       };

//       // Create the application in the database
//       const application = await this.applicationRepository.create(applicationData);

//       return application;
//     } catch (error) {
//       // Log the error (optional)
//       console.error('Error creating application:', error);

//       // Throw a user-friendly error
//       throw new HttpException('Failed to create application', HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//   // Add more service methods as needed
// }



import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Application } from 'src/models/applications/application.entity';
import { APPLICATION_REPOSITORY } from 'src/common/constants/repositories';
import { ApplicationDto } from 'src/api/brokers/applications/list-applications/list-applications.dto';
import { ApplicationStatus } from 'src/enums/application-status.enum';

@Injectable()
export class ApplicationService {
  constructor(
    @Inject(APPLICATION_REPOSITORY)
    private applicationRepository: typeof Application,
  ) {}




  async getAllApplications(): Promise<Application[]> {
    try {
      // Fetch all applications from the database
      const applications = await this.applicationRepository.findAll<Application>();
      return applications;
    } catch (error) {
      // Log the error
      console.error('Error fetching applications:', error);
      // Throw a user-friendly error
      throw new HttpException('Failed to fetch applications', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  async createApplication(dto: ApplicationDto): Promise<Application> {
    try {

      console.log('Received DTO:', JSON.stringify(dto));
      // Validate DTO
      if (!dto.applicantName) {
        throw new HttpException('Applicant name is required', HttpStatus.BAD_REQUEST);
      }

      // Prepare application data with the correct types
      const applicationData: Partial<Application> = {
        ...dto,
        status: ApplicationStatus.Submitted,
      };

      // Debug log to check data
      console.log('Application data:', applicationData);

      // Create the application in the database
      const application = await this.applicationRepository.create(applicationData as any);

      return application;
    } catch (error) {
      // Log the error
      console.error('Error creating application:', error);

      // Throw a user-friendly error
      throw new HttpException('Failed to create application', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



 
  
}






























