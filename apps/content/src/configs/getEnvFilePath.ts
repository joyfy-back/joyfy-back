import { Environments } from './env-setings';

export const getEnvFilePath = (env: Environments) => {
  const defaultEnvPaths = ['.env.development', '.env'];

  switch (env) {
    case Environments.TEST:
      return ['.env.test', ...defaultEnvPaths];
    case Environments.DEVELOPMENT:
      return defaultEnvPaths;
    default:
      return [];
  }
};
