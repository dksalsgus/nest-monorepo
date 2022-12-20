import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  async addJob() {
    for (let index = 0; index < 10; index++) {
      await this.audioQueue.add(
        'transcode',
        {
          foo: `bar${index}`,
        },
        { delay: 3000, priority: 100 / index },
      );
    }
    return 'succes';
  }
}
