import { Controller, Post } from '@nestjs/common';
import { AudioService } from '../service/audio.service';

@Controller('/queue')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Post()
  async addJob() {
    const ret = await this.audioService.addJob();
    return ret;
  }
}
