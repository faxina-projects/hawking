import { NextFunction, Request, Response } from 'express';

import { ISearchService } from '@/core/application/search/search.service.interface';

import { HttpSuccessResponseDTO } from '../presentation/dtos';
import { BaseController } from './base.controller';

class SearchController extends BaseController {
  constructor(private readonly searchService: ISearchService) {
    super('/search');

    this.initializeRoutes();
  }

  protected handle = async (
    request: Request,
    response: Response<unknown, Record<string, unknown>>,
    _next: NextFunction,
  ): Promise<void> => {
    const { text = '' } = request.query;

    const data = await this.searchService.search(text as string);

    const responseData = new HttpSuccessResponseDTO(data);

    response.status(responseData.httpStatus).send(responseData);
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}`, this.handle);
  };
}

export { SearchController };
