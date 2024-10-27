import { Module } from '@nestjs/common';
import { EmployeeDwService } from './employee-dw.service';
import { EmployeeDwController } from './employee-dw.controller';
import { EmployeeDw } from './entities/employee-dw.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeDw])],
  controllers: [EmployeeDwController],
  providers: [EmployeeDwService],
})
export class EmployeeDwModule {}
