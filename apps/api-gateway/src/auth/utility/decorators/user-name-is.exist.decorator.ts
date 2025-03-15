import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { AuthRepository } from "../../infrastructure/auth.repository";






@ValidatorConstraint({ name: "UserNameIsExist", async: true })
@Injectable()
export class UserNameIsExistContsraint implements ValidatorConstraintInterface {
    constructor(protected authRepository: AuthRepository) { }

    async validate(value: any, validationArguments: ValidationArguments) {
        const UserNameIsExist = await this.authRepository.findIsUserName(value)

        if (!UserNameIsExist.success) {
            return true
        } else {
            return false
        }
    }


}



export function UserNameIsExist(property?: string, validationOptions?: ValidationOptions) {

    return function (object: Object, propertyName: string
    ) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: UserNameIsExistContsraint
        })
    }
}