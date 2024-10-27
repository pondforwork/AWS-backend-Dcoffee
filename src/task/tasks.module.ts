import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
import { SummarysalaryModule } from 'src/summarysalary/summarysalary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Checkinout, Summarysalary]),
    SummarysalaryModule,
  ],
  providers: [TasksService],
})
export class TasksModule {}
