import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AudioService } from '../service/audio.service';

@Controller('/queue')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Post()
  async addJob() {
    const ret = await this.audioService.addJob();
    return ret;
  }

  @Post('/image')
  @UseInterceptors(FilesInterceptor('files'))
  async addImageJob(@UploadedFiles() files: Express.Multer.File[]) {
    const ret = await this.audioService.addImageJob(files);
    return ret;
  }
}
