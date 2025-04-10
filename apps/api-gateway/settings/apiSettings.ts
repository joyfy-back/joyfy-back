import { IsNumber } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export class ApiSettings {
  constructor(private environmentVariables: EnvironmentVariable) { }
  @IsNumber()
  PORT: number = Number(this.environmentVariables.PORT);
  SECRET: number = Number(this.environmentVariables.SECRET);
  GOOGLE_CLIENT_ID: string = String(this.environmentVariables.GOOGLE_CLIENT_ID);
  GOOGLE_CLIENT_SECRET: string = String(this.environmentVariables.GOOGLE_CLIENT_SECRET)
  RECAPTCHA_SECRET_KEY: string = String(this.environmentVariables.RECAPTCHA_SECRET_KEY)
}
