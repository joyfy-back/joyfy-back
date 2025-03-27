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
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateInputDto {
  @ApiProperty({ example: 'john_doe', description: 'Username' })
  @IsString()
  @MinLength(6, { message: 'Username must be at least 6 characters long' })
  @MaxLength(30, { message: 'Username cannot be longer than 30 characters' })
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message:
      'Username can only contain letters, numbers, underscores (_), and hyphens (-)',
  })
  username: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'User password' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
  @Matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+$/, {
    message:
      'Password can only contain letters, numbers, and special characters: !@#$%^&*()_+-=[]{};\':"\\|,.<>/?~`',
  })
  password: string;

  @ApiProperty({
    example: 'Password123!',
    description: 'Password confirmation',
  })
  @IsString()
  @IsNotEmpty({ message: 'Password confirmation is required' })
  @Equals('password', { message: 'Passwords do not match' })
  passwordConfirmation: string;

  @ApiProperty({ example: true, description: 'Agree to terms' })
  @IsBoolean()
  @Equals(true, {
    message: 'You must agree to the Terms of Service and Privacy Policy',
  })
  agreeToTerms: boolean;
}
