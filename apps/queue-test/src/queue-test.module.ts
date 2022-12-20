import { Module } from '@nestjs/common';
import { QueueTestController } from './queue-test.controller';
import { QueueTestService } from './queue-test.service';

@Module({
  imports: [],
  controllers: [QueueTestController],
  providers: [QueueTestService],
})
export class QueueTestModule {}
