import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDwService } from './employee-dw.service';

describe('EmployeeDwService', () => {
  let service: EmployeeDwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeDwService],
    }).compile();

    service = module.get<EmployeeDwService>(EmployeeDwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
