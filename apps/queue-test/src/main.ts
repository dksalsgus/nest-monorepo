import { NestFactory } from '@nestjs/core';
import { QueueTestModule } from './queue-test.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueTestModule);
  await app.listen(3000);
}
bootstrap();
