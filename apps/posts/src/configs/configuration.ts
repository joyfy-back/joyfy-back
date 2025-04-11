import { ValidateNested, validateSync } from 'class-validator';
import { ApiSettings } from './apiSettings';
import { DbSettings } from './db-settings';
import { EnvironmentSettings } from './env-setings';

export type EnvironmentVariable = { [key: string]: string };
export type ConfigurationType = Configuration;
export type ApiSettingsType = ConfigurationType['apiSettings'];
export type EnvironmentSettingsType = ConfigurationType['environmentSettings'];
export type DbSettingsSettingsType = ConfigurationType['dbSettings'];

export class Configuration {
  @ValidateNested()
  apiSettings: ApiSettings;

  @ValidateNested()
  dbSettings: DbSettings;

  @ValidateNested()
  environmentSettings: EnvironmentSettings;

  private constructor(configuration: Configuration) {
    Object.assign(this, configuration);
  }

  static createConfig(
    environmentVariables: Record<string, string>,
  ): Configuration {
    return new this({
      apiSettings: new ApiSettings(environmentVariables),
      dbSettings: new DbSettings(environmentVariables),
      environmentSettings: new EnvironmentSettings(environmentVariables),
    });
  }
}

export default () => {
  const environmentVariables = process.env as EnvironmentVariable;

  return Configuration.createConfig(environmentVariables);
};
