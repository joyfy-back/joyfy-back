import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsUUID } from 'class-validator';

export class UserResponseDto {
  @ApiProperty({
    example: 'b80de5b2-c5bb-4d96-a665-2373c90f60a7',
    description: 'Unique user identifier',
  })
  userId: string;

  @ApiProperty({
    example: 'john_doe',
    description: 'User login name',
  })
  username: string;

  @ApiProperty({
    example: 'd350521e-308a-4c3c-b3e5-34ce6b15f740',
    description: 'Device identifier from which user logged in',
  })
  deviceId: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  @IsEmail()
  email: string;
}
