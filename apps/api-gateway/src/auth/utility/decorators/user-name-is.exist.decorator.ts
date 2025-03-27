import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AuthRepository } from '../../infrastructure/auth.repository';

@ValidatorConstraint({ name: 'UserNameIsExist', async: true })
@Injectable()
export class UserNameIsExistConstraint implements ValidatorConstraintInterface {
  constructor(protected authRepository: AuthRepository) {}

  async validate(value: string) {
    const { success } = await this.authRepository.findIsUserName(value);

    return !success;
  }
}

export function UserNameIsExist(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: UserNameIsExistConstraint,
    });
  };
}
