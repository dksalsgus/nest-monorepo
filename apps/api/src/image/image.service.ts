import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as sharp from 'sharp';

@Injectable()
export class ImageService {}

export class ImageUtil {
  static async resizeImage(files: Express.Multer.File[]) {
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

  static async resizeImageData(dataList: Record<string, any>[]) {
    for (const item of dataList) {
      const { data, originalname } = item;
      const buffer = Buffer.from(data, 'base64');
      const resizeImage = await sharp(buffer, {
        failOnError: false,
      }).withMetadata();
      // .resize({ width: 1024, height: 1024 });
      const resizeBuffer = await resizeImage.toBuffer();
      fs.writeFile(`./sharp-test/${originalname}.png`, resizeBuffer, (err) => {
        if (err) console.log(err);
      });
    }
  }
}
