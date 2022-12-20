import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('audio')
export class AudioConsumer {
  @Process('transcode')
  async getJob(job: Job<unknown>) {
    console.log(job.data);
  }
}
