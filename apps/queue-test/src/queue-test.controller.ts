import { Controller, Get } from '@nestjs/common';
import { QueueTestService } from './queue-test.service';

@Controller()
export class QueueTestController {
  constructor(private readonly queueTestService: QueueTestService) {}

  @Get()
  getHello(): string {
    return this.queueTestService.getHello();
  }
}
