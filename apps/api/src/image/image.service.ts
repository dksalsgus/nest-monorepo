import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as sharp from 'sharp';

@Injectable()
export class ImageService {
  async resizeImage(files: Express.Multer.File[]) {
    for (const item of files) {
      const { buffer, originalname } = item;
      const resizeImage = await sharp(buffer)
        .withMetadata()
        .resize({ width: 100, height: 100 });
      const resizeBuffer = await resizeImage.toBuffer();
      fs.writeFile(`./sharp-test/${originalname}.png`, resizeBuffer, (err) => {
        if (err) throw err;
      });
    }
  }
}
