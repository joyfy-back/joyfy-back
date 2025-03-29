import { IsEnum } from 'class-validator';
import { EnvironmentVariable } from './configuration';

export enum Environments {
  DEVELOPMENT = 'DEVELOPMENT',
  STAGING = 'STAGING',
  PRODUCTION = 'PRODUCTION',
  TEST = 'TEST', // здесь обязтельно нужен пробел после слова , так как с env Значение достается как-то странно.
}
export class EnvironmentSettings {
  constructor(private environmentVariables: EnvironmentVariable) {}
  @IsEnum(Environments)
  private ENV = this.environmentVariables.ENV;

  get isProduction() {
    return this.ENV === Environments.PRODUCTION;
  }
  get isStaging() {
    return this.ENV === Environments.STAGING;
  }
  get isTesting() {
    return this.ENV === Environments.TEST;
  }
  get isDevelopment() {
    return this.ENV === Environments.DEVELOPMENT;
  }
  get currentEnv() {
    return this.ENV;
  }
}
