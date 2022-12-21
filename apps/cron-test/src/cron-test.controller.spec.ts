import { Test, TestingModule } from '@nestjs/testing';
import { CronTestController } from './cron-test.controller';
import { CronTestService } from './cron-test.service';

describe('CronTestController', () => {
  let cronTestController: CronTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronTestController],
      providers: [CronTestService],
    }).compile();

    cronTestController = app.get<CronTestController>(CronTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronTestController.getHello()).toBe('Hello World!');
    });
  });
});
