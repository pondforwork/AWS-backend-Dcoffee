import { Test, TestingModule } from '@nestjs/testing';
import { StoreDwService } from './store-dw.service';

describe('StoreDwService', () => {
  let service: StoreDwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreDwService],
    }).compile();

    service = module.get<StoreDwService>(StoreDwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
