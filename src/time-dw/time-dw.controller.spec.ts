import { Test, TestingModule } from '@nestjs/testing';
import { TimeDwController } from './time-dw.controller';
import { TimeDwService } from './time-dw.service';

describe('TimeDwController', () => {
  let controller: TimeDwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeDwController],
      providers: [TimeDwService],
    }).compile();

    controller = module.get<TimeDwController>(TimeDwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
