import { Module } from '@nestjs/common';
import { CronTestController } from './cron-test.controller';
import { CronTestService } from './cron-test.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [CronTestController],
  providers: [CronTestService],
})
export class CronTestModule {}
