import { Test, TestingModule } from '@nestjs/testing';
import { SummarysalaryController } from './summarysalary.controller';
import { SummarysalaryService } from './summarysalary.service';

describe('SummarysalaryController', () => {
  let controller: SummarysalaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummarysalaryController],
      providers: [SummarysalaryService],
    }).compile();

    controller = module.get<SummarysalaryController>(SummarysalaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
