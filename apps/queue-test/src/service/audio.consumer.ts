import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ImageUtil } from '../../../api/src/image/image.service';

@Processor('audio')
export class AudioConsumer {
  private index = 0;

  @Process('transcode')
  async getJob(job: Job<unknown>) {
    const { data } = job;
    const list = (data as []).map((e) => e as Record<string, any>);
    const idx = this.index++;
    console.log(`${idx} start`);
    const ret = await ImageUtil.resizeImageData(list);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`${idx} finish`);
  }
}
