import { IsString } from 'class-validator';
import { EnvironmentVariable } from './configuration';
import { Environments } from './env-setings';

export class DbSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsString()
  get DATABASE_URL(): string {
    if (this.environmentVariables.ENV === Environments.TEST) {
      return this.environmentVariables.DATABASE_URL_TEST;
    }
    return this.environmentVariables.DATABASE_URL;
  }
}
