import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 순서 : 3번
  constructor(private readonly appService: AppService) {}

  @Get() // 기능 첨가, 반드시 붙여서 써야함
  getHello() {
    return this.appService.getHello();
  }
}
