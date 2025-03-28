import { IsNumber } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export class ApiSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsNumber()
  PORT: number = Number(this.environmentVariables.PORT);
  SECRET: string = String(this.environmentVariables.SECRET);
  GITHUB_CLIENT_ID: string = String(this.environmentVariables.GITHUB_CLIENT_ID);
  GITHUB_CLIENT_SECRET: string = String(
    this.environmentVariables.GITHUB_CLIENT_SECRET,
  );
  GITHUB_CALLBACK_URL: string = String(
    this.environmentVariables.GITHUB_CALLBACK_URL,
  );
}
