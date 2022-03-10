import { HttpMessages, HttpStatus } from '@/core/shared/http/configs';
import { HttpResponseDTO } from './http-response.dto';

export class HttpSuccessResponseDTO<D = any> extends HttpResponseDTO {
  public readonly data?: D;

  constructor(data?: D, message: string = HttpMessages.OK) {
    super(HttpStatus.OK, message);

    this.data = data;
  }
}
