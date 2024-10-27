import { Test, TestingModule } from '@nestjs/testing';
import { CustommerDwService } from './custommer-dw.service';

describe('CustommerDwService', () => {
  let service: CustommerDwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustommerDwService],
    }).compile();

    service = module.get<CustommerDwService>(CustommerDwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
