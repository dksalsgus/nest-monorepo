import { NestFactory } from '@nestjs/core';
import { CronTestModule } from './cron-test.module';

async function bootstrap() {
  const app = await NestFactory.create(CronTestModule);
  await app.listen(3000);
}
bootstrap();
