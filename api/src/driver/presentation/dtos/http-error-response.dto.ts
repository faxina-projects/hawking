import { HttpStatus } from '@/core/shared/http/configs';
import { HttpResponseDTO } from './http-response.dto';

export class HttpErrorResponseDTO extends HttpResponseDTO {
  public readonly reason?: string;
  public readonly validationErrors?: Record<string, unknown>[];

  constructor(
    message: string,
    reason?: string,
    httpStatus: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    validationErrors?: Record<string, unknown>[],
  ) {
    super(httpStatus, message);
    this.reason = reason;
    this.validationErrors = validationErrors;
  }
}
