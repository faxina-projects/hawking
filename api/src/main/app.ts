import Express, { Application, json, urlencoded } from 'express';
import helmet from 'helmet';

import { healthCheckController } from '@/driver/controller';

import { SearchControllerFactory } from './factories';

class App {
  private server: Application;
  private port: number;

  constructor(port: number) {
    this.server = Express();
    this.port = port;
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares = (): void => {
    this.server.use(helmet());
    this.server.use(urlencoded({ extended: true }));

    this.server.use(json());
  };

  private initRoutes = (): void => {
    this.server.use('/', healthCheckController.router);
    this.server.use('/', SearchControllerFactory.create().router);
  };

  public listen = async (): Promise<void> => {
    this.server.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
}

export { App };
