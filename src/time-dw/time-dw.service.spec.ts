import { Test, TestingModule } from '@nestjs/testing';
import { TimeDwService } from './time-dw.service';

describe('TimeDwService', () => {
  let service: TimeDwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeDwService],
    }).compile();

    service = module.get<TimeDwService>(TimeDwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
