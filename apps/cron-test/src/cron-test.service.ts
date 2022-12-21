import { Injectable } from '@nestjs/common';

@Injectable()
export class CronTestService {
  getHello(): string {
    return 'Hello World!';
  }
}
