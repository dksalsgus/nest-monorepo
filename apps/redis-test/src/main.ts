import { NestFactory } from '@nestjs/core';
import { RedisTestModule } from './redis-test.module';

async function bootstrap() {
  const app = await NestFactory.create(RedisTestModule);
  await app.listen(3000);
}
bootstrap();
