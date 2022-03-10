import { HttpStatus } from '@/core/shared/http/configs';
import { HttpResponseDTO } from './http-response.dto';

export class HttpCreatedResponseDTO<D = any> extends HttpResponseDTO {
  public readonly data?: D;

  constructor(message: string, data?: D) {
    super(HttpStatus.CREATED, message);

    this.data = data;
  }
}
