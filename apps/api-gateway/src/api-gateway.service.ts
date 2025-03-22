import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewayService {
  getHello(): string {
    return 'Helаываываывlo World!';
  }
}
