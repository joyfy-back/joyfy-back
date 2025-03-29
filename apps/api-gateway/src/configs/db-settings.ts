import { IsString } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export class DbSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsString()
  DATABASE_URL: string = String(this.environmentVariables.DATABASE_URL);
}
