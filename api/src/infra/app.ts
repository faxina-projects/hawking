import Express, { Application, json, urlencoded } from 'express';
import helmet from 'helmet';

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
    // this.app.use('/', healthCheckController.router);
  };

  public listen = async (): Promise<void> => {
    this.server.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
}

export { App };
