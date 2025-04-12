import { IsString } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export class DbSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsString()
  API_GATEWAY_DATABASE_URL: string = String(this.environmentVariables.API_GATEWAY_DATABASE_URL);
}
