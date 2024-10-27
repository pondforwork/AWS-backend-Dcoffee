import { Test, TestingModule } from '@nestjs/testing';
import { ProductDwService } from './product-dw.service';

describe('ProductDwService', () => {
  let service: ProductDwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDwService],
    }).compile();

    service = module.get<ProductDwService>(ProductDwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
