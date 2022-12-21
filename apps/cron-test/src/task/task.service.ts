import { Injectable } from '@nestjs/common';
import { Cron, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
@Injectable()
export class TaskService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  @Cron('10 * * * * *', { name: 'task-cron' }) // 매분 10초마다
  handleCron() {
    const now = new Date();
    console.log(now + 'handle cron');
  }

  @Interval('task-interval', 5000)
  handleInterval() {
    console.log('handle Interval');
    const job = this.schedulerRegistry.getCronJob('task-cron');
    console.log(job.running);
  }

  @Timeout('task-timeout', 6000)
  handleTimeOut() {
    console.log('handle TimeOut');
  }
}
