import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 순서 : 4번
  getHello(): string {
    return 'Hello World!';
  }
}
