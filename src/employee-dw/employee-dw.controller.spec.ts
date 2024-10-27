import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDwController } from './employee-dw.controller';
import { EmployeeDwService } from './employee-dw.service';

describe('EmployeeDwController', () => {
  let controller: EmployeeDwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeDwController],
      providers: [EmployeeDwService],
    }).compile();

    controller = module.get<EmployeeDwController>(EmployeeDwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
