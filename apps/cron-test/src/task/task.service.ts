import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
@Injectable()
export class TaskService {
  @Cron('10 * * * * *', { name: 'task-cron' }) // 매분 10초마다
  handleCron() {
    const now = new Date();
    console.log(now + 'handle cron');
  }

  @Interval('task-interval', 5000)
  handleInterval() {
    console.log('handle Interval');
  }

  @Timeout('task-timeout', 2000)
  handleTimeOut() {
    console.log('handle TimeOut');
  }
}
