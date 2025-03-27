import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AuthRepository } from '../../infrastructure/auth.repository';

@ValidatorConstraint({ name: 'EmailIsExist', async: true })
@Injectable()
export class EmailIsExistContsraint implements ValidatorConstraintInterface {
  constructor(protected authRepository: AuthRepository) {}

  async validate(value: any, validationArguments: ValidationArguments) {
    const loginIsExists = await this.authRepository.findIsEmail(value);
    if (!loginIsExists.success) {
      return true;
    } else {
      return false;
    }
  }
}

export function EmailIsExist(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: EmailIsExistContsraint,
    });
  };
}
