import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('audio')
export class AudioConsumer {
  private index = 0;

  @Process('transcode')
  async getJob(job: Job<unknown>) {
    const idx = this.index++;
    console.log(`${idx} start`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`${idx} finish`);
  }
}
