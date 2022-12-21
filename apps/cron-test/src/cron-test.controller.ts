import { Controller, Get } from '@nestjs/common';
import { CronTestService } from './cron-test.service';

@Controller()
export class CronTestController {
  constructor(private readonly cronTestService: CronTestService) {}

  @Get()
  getHello(): string {
    return this.cronTestService.getHello();
  }
}
