import { NextFunction, Request, Response, Router } from 'express';

abstract class BaseController {
  public router: Router;

  constructor(protected readonly path: string) {
    this.router = Router();
  }

  protected abstract handle: (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => Promise<void>;

  public getPath(): string {
    return this.path;
  }

  protected abstract initializeRoutes: () => void;
}

export { BaseController };
