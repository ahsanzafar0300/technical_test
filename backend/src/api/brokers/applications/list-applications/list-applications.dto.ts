import { ApiProperty, ApiPropertyOptional, PickType } from '@nestjs/swagger';
import { Application } from 'src/models/applications/application.entity';
import { ApplicationStatus } from 'src/enums/application-status.enum';
import {
  INVALID_MAXIMUM_DATE_ERROR,
  INVALID_MINIMUM_DATE_ERROR,
  MINIMUM_DATE_EXCEEDS_MAXIMUM_DATE_ERROR,
} from 'src/common/constants/response-messages';
import { IsArray, IsDate, IsEnum, IsOptional } from 'class-validator';
import { SuccessResponseDto } from 'src/common/responses';
import { TaskStatus } from 'src/enums/task-status.enum';
import { Transform, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

/**
 * Querystring parameters for listing applications
 */
export class BrokerApplicationsListRequestDto {
  /**
   * Optional flag for application status
   */
  @ApiPropertyOptional({
    description: 'Optional flag for application status',
    enum: ApplicationStatus,
    enumName: 'ApplicationStatus',
  })
  @IsArray()
  @IsEnum(ApplicationStatus, { each: true })
  @IsOptional()
  readonly status?: ApplicationStatus[];
  /**
   * Optional flag for applications with incomplete tasks
   */
  @ApiPropertyOptional({
    description: 'Optional flag for applications with incomplete tasks',
    enum: TaskStatus,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  readonly completed?: TaskStatus.Completed | TaskStatus.Pending;
  /**
   * Optional minimum date for the application submission
   */
  @ApiPropertyOptional({
    description: 'Minimum date for the application submission',
  })
  @Transform(({ value }) => (value && !isNaN(value) ? value : null))
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  readonly minimumDate?: Date;
  /**
   * Optional maximum date for the application submission
   */
  @ApiPropertyOptional({
    description: 'Maximum date for the application submission',
  })
  @Transform(({ value }) => (value && !isNaN(value) ? value : null))
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  readonly maximumDate?: Date;
}

// export class ApplicationDto extends PickType(Application, [
//   'applicantName',
//   'applicantEmail',
//   'applicantMobilePhoneNumber',
//   'applicantAddress',
//   'annualIncomeBeforeTax',
//   'incomingAddress',
//   'incomingDeposit',
//   'incomingPrice',
//   'incomingStampDuty',
//   'loanAmount',
//   'loanDuration',
//   'monthlyExpenses',
//   'outgoingAddress',
//   'outgoingMortgage',
//   'outgoingValuation',
//   'savingsContribution'
// ]) { }

import { IsString, IsNotEmpty, IsEmail} from 'class-validator';

export class ApplicationDto extends PickType(Application, [
  'applicantName',
  'applicantEmail',
  'applicantMobilePhoneNumber',
  'applicantAddress',
  'annualIncomeBeforeTax',
  'incomingAddress',
  'incomingDeposit',
  'incomingPrice',
  'incomingStampDuty',
  'loanAmount',
  'loanDuration',
  'monthlyExpenses',
  'outgoingAddress',
  'outgoingMortgage',
  'outgoingValuation',
  'savingsContribution'
]) {
  @IsString()
  @IsNotEmpty()
  readonly applicantName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly applicantEmail: string;
  
  @IsString()
  @IsNotEmpty()
  readonly applicantMobilePhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly applicantAddress: string;

  @IsString()
  @IsNotEmpty()
  readonly incomingAddress: string;

  @IsString()
  @IsNotEmpty()
  readonly outgoingAddress: string;
}



// export class ApplicationDto extends PickType(Application, [
//   'applicantName',
//   'applicantEmail',
//   'applicantMobilePhoneNumber',
//   'applicantAddress',
//   'annualIncomeBeforeTax',
//   'incomingAddress',
//   'incomingDeposit',
//   'incomingPrice',
//   'incomingStampDuty',
//   'loanAmount',
//   'loanDuration',
//   'monthlyExpenses',
//   'outgoingAddress',
//   'outgoingMortgage',
//   'outgoingValuation',
//   'savingsContribution'
// ]) {
//   @IsString()
//   @IsNotEmpty()
//   readonly applicantName: string;

//   @IsEmail()
//   @IsOptional()
//   readonly applicantEmail?: string;

//   @IsString()
//   @IsOptional()
//   readonly applicantMobilePhoneNumber?: string;

//   @IsString()
//   @IsOptional()
//   readonly applicantAddress?: string;

//   @IsString()
//   @IsOptional()
//   readonly incomingAddress?: string;

//   @IsString()
//   @IsOptional()
//   readonly outgoingAddress?: string;

//   @IsNumber()
//   @IsOptional()
//   readonly annualIncomeBeforeTax?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly incomingDeposit?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly incomingPrice?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly incomingStampDuty?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly loanAmount?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly loanDuration?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly monthlyExpenses?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly outgoingMortgage?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly outgoingValuation?: number;

//   @IsNumber()
//   @IsOptional()
//   readonly savingsContribution?: number;
// }




// export class BrokerApplicationPostResponseDto extends SuccessResponseDto {
//   readonly loanAmount: number
// }
// export class BrokerApplicationPostResponseDto {
//   success: boolean;
//   loanAmount?: number;
//   application?: Application; // Add this line
// }

export class BrokerApplicationPostResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  loanAmount: number | null;

  @ApiProperty({ type: Application })
  application: Application; // Ensure this matches your DTO
}

class BrokerApplicationDto extends PickType(Application, [
  'id',
  'applicationId',
  'createdAt',
  'status',
  'loanAmount',
  'loanDuration',
  'applicantName',
  'incomingAddress',
  'outgoingAddress',
]) { }

/**
 * The response data
 */
export class BrokerApplicationsListResponseDto extends SuccessResponseDto {
  /**
   * The broker's applications
   */
  readonly applications: BrokerApplicationDto[];
}

/**
 * Error codes this endpoint can return
 */
const BAD_REQUEST_ERRORS = [
  INVALID_MINIMUM_DATE_ERROR,
  INVALID_MAXIMUM_DATE_ERROR,
  MINIMUM_DATE_EXCEEDS_MAXIMUM_DATE_ERROR,
];

/**
 * The response data when an error code is returned
 */
export class BrokerApplicationsListBadRequestResponseDto {
  /**
   * Failure message and reason
   */
  @ApiProperty({
    description: 'Failure message and reason',
    enum: BAD_REQUEST_ERRORS,
  })
  @IsEnum(BAD_REQUEST_ERRORS)
  readonly message: string;
}
