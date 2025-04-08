import { IsString, Length } from 'class-validator';
import { Trim } from '../../utility/decorators/trim';
import { ApiProperty } from '@nestjs/swagger';

export class NewPasswordInputDto {
  @ApiProperty({ example: 'NewPassword123!', description: 'New password' })
  @Trim()
  @IsString()
  @Length(6, 20, { message: 'Length not correct' })
  newPassword: string;

  @ApiProperty({ example: 'recovery-code', description: 'Recovery code' })
  @Trim()
  @IsString()
  recoveryCode: string;
}
