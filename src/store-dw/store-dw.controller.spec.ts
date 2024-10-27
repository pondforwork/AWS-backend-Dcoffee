import { Test, TestingModule } from '@nestjs/testing';
import { StoreDwController } from './store-dw.controller';
import { StoreDwService } from './store-dw.service';

describe('StoreDwController', () => {
  let controller: StoreDwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreDwController],
      providers: [StoreDwService],
    }).compile();

    controller = module.get<StoreDwController>(StoreDwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
