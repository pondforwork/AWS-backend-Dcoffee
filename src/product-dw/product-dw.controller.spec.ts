import { Test, TestingModule } from '@nestjs/testing';
import { ProductDwController } from './product-dw.controller';
import { ProductDwService } from './product-dw.service';

describe('ProductDwController', () => {
  let controller: ProductDwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDwController],
      providers: [ProductDwService],
    }).compile();

    controller = module.get<ProductDwController>(ProductDwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
