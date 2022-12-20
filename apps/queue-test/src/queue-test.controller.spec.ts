import { Test, TestingModule } from '@nestjs/testing';
import { QueueTestController } from './queue-test.controller';
import { QueueTestService } from './queue-test.service';

describe('QueueTestController', () => {
  let queueTestController: QueueTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueueTestController],
      providers: [QueueTestService],
    }).compile();

    queueTestController = app.get<QueueTestController>(QueueTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(queueTestController.getHello()).toBe('Hello World!');
    });
  });
});
