import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AuthRepository } from '../../infrastructure/auth.repository';

@ValidatorConstraint({ name: 'EmailIsExist', async: true })
@Injectable()
export class EmailIsExistConstraint implements ValidatorConstraintInterface {
  constructor(private authRepository: AuthRepository) {}

  async validate(value: string) {
    const { success } = await this.authRepository.findIsEmail(value);

    return !success;
  }
  defaultMessage() {
    return 'This email is already registered';
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
      validator: EmailIsExistConstraint,
    });
  };
}
