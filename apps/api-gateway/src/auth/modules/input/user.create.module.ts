import {
    IsEmail,
    IsString,
    MinLength,
    MaxLength,
    Matches,
    IsNotEmpty,
    IsBoolean,
    Equals,
} from 'class-validator';
import { UserNameIsExist } from '../../utility/decorators/user-name-is.exist.decorator';
import { EmailIsExist } from '../../utility/decorators/email-Is-exist.decorator';

export class UserCreateModul {
    @IsString()
    @MinLength(6, { message: 'Username must be at least 6 characters long' })
    @MaxLength(30, { message: 'Username cannot be longer than 30 characters' })
    @Matches(/^[a-zA-Z0-9_-]+$/, {
        message: 'Username can only contain letters, numbers, underscores (_), and hyphens (-)',
    })
    @UserNameIsExist()

    username: string;

    @IsEmail({}, { message: 'Invalid email format' })
    @EmailIsExist()
    email: string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
    @Matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+$/, {
        message:
            'Password can only contain letters, numbers, and special characters: !@#$%^&*()_+-=[]{};\':"\\|,.<>/?~`',
    })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'Password confirmation is required' })
    @Equals('password', { message: 'Passwords do not match' })
    passwordConfirmation: string;

    @IsBoolean()
    @Equals(true, { message: 'You must agree to the Terms of Service and Privacy Policy' })
    agreeToTerms: boolean;
}
