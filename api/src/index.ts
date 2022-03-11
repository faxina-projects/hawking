import 'module-alias/register';
import '@/main/config/env.config';

import { App } from './main/app';
import { appConfig } from './main/config';

(async (): Promise<void> => {
  try {
    const app = new App(appConfig.port);

    await app.listen();
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
})();
