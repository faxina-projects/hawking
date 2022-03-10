import { HttpStatus } from '@/core/shared/http/configs';

export class HttpResponseDTO {
  constructor(
    public readonly httpStatus: HttpStatus,
    public readonly message?: string,
  ) {}
}
