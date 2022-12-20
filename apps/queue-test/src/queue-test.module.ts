import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AudioController } from './controller/audio.controller';
import { AudioConsumer } from './service/audio.consumer';
import { AudioService } from './service/audio.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AudioController],
  providers: [AudioService, AudioConsumer],
})
export class QueueTestModule {}
