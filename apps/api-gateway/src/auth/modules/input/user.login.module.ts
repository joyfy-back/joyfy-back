import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class UserLoginInputModule {
    @ApiProperty({ example: 'john@example.com', description: 'User email' })
    @IsEmail({}, { message: 'Invalid email format' })
    Email: string;
  
    @ApiProperty({ example: 'Password123!', description: 'User password' })
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
    @Matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+$/, {
      message:
        'Password can only contain letters, numbers, and special characters: !@#$%^&*()_+-=[]{};\':"\\|,.<>/?~`',
    })
    Password: string;
  
}