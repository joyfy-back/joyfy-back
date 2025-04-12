import { IsString } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export class DbSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsString()
  CONTENT_DATABASE_URL: string = String(this.environmentVariables.CONTENT_DATABASE_URL);
}
