import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImageService, ImageUtil } from './image.service';
@Controller('/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('')
  @UseInterceptors(FilesInterceptor('files'))
  async resizeImage(@UploadedFiles() files: Express.Multer.File[]) {
    const ret = await ImageUtil.resizeImage(files);
    return ret;
  }
}
