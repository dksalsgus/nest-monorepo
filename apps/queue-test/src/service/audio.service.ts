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
        // { delay: 3000, priority: 100 / index },
      );
    }
    return 'succes';
  }

  async addImageJob(files: Express.Multer.File[]) {
    const dataList = files.map((e) => {
      const { buffer, originalname } = e;
      const data = buffer.toString('base64');
      return { data, originalname };
    });
    await this.audioQueue.add('transcode', dataList);
    return 'complete';
  }
}
