import { NextFunction, Request, Response } from 'express';

import { SearchEngine } from '@/core/application/search';
import { ElasticsearchFactory } from '@/driven/elasticsearch';

import { HttpSuccessResponseDTO } from '../presentation/dtos';
import { BaseController } from './base.controller';

class SearchCheckController extends BaseController {
  constructor(private readonly searchEngine: SearchEngine) {
    super('/search');

    this.initializeRoutes();
  }

  protected handle = async (
    request: Request,
    response: Response<unknown, Record<string, unknown>>,
    _next: NextFunction,
  ): Promise<void> => {
    const { text = '' } = request.query;

    const data = await this.searchEngine.search(
      ['city', 'state', 'id'],
      text as string,
    );

    const responseData = new HttpSuccessResponseDTO(data);

    response.status(responseData.httpStatus).send(responseData);
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}`, this.handle);
  };
}

const searchCheckController = new SearchCheckController(
  ElasticsearchFactory.create(),
);

export { searchCheckController };
