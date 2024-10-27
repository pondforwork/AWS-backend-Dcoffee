import { Test, TestingModule } from '@nestjs/testing';
import { CustommerDwController } from './custommer-dw.controller';
import { CustommerDwService } from './custommer-dw.service';

describe('CustommerDwController', () => {
  let controller: CustommerDwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustommerDwController],
      providers: [CustommerDwService],
    }).compile();

    controller = module.get<CustommerDwController>(CustommerDwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
