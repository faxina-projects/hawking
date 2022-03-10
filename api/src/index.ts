import 'module-alias/register';
import '@/infra/config/env.config';

import { App } from './infra/app';
import { appConfig } from './infra/config';

(async (): Promise<void> => {
  try {
    const app = new App(appConfig.port);

    await app.listen();
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
})();
