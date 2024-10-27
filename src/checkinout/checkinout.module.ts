import { Module } from '@nestjs/common';
import { CheckinoutService } from './checkinout.service';
import { CheckinoutController } from './checkinout.controller';
import { Checkinout } from './entities/checkinout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { CheckinoutSubscriber } from './SubscriberCheckInOut/Subscriber.service';
import { SummarysalaryModule } from 'src/summarysalary/summarysalary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Checkinout, Summarysalary, Employee]),
    SummarysalaryModule,
  ],
  controllers: [CheckinoutController],
  providers: [CheckinoutService, CheckinoutSubscriber],
})
export class CheckinoutModule {}
