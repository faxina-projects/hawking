import { NextFunction, Request, Response } from 'express';

import { HttpSuccessResponseDTO } from '../presentation/dtos';
import { BaseController } from './base.controller';

class HealthCheckController extends BaseController {
  constructor() {
    super('/');

    this.initializeRoutes();
  }

  protected handle = async (
    _request: Request,
    response: Response<unknown, Record<string, unknown>>,
    _next: NextFunction,
  ): Promise<void> => {
    const responseData = new HttpSuccessResponseDTO();

    response.status(responseData.httpStatus).send(responseData);
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}`, this.handle);
  };
}

const healthCheckController = new HealthCheckController();

export { healthCheckController };
