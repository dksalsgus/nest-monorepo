import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AuthModule);
  const PORT = 3001;
  await app.listen(PORT);
  console.log(`Auth App Start PORT ${PORT}`);
}
bootstrap();
