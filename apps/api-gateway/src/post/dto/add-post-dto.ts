import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

export class AddPostDto {
  @IsString()
  @IsNotEmpty({
    message: 'Value description  must  be not empty.',
  })
  @Transform(({ value }: TransformFnParams) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @Length(1, 500, {
    message: 'Description must be between minimum 1 and maximum 500 letters.',
  })
  description: string;
}
