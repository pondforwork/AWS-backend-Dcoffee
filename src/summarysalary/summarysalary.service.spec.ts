import { Test, TestingModule } from '@nestjs/testing';
import { SummarysalaryService } from './summarysalary.service';

describe('SummarysalaryService', () => {
  let service: SummarysalaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummarysalaryService],
    }).compile();

    service = module.get<SummarysalaryService>(SummarysalaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
