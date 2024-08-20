import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare class DtoValidationPipe implements PipeTransform<any> {
    private readonly logger;
    transform(value: any, { metatype }: ArgumentMetadata): Promise<Record<string, unknown>>;
    private toValidate;
    formatErrors(validationErrors: ValidationError[]): string | string[];
}
