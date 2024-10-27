import { Module } from '@nestjs/common';
import { SummarysalaryService } from './summarysalary.service';
import { SummarysalaryController } from './summarysalary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summarysalary } from './entities/summarysalary.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Summarysalary, Checkinout, Employee])],
  controllers: [SummarysalaryController],
  providers: [SummarysalaryService],
  exports: [SummarysalaryService],
})
export class SummarysalaryModule {}
