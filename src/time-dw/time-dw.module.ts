import { Module } from '@nestjs/common';
import { TimeDwService } from './time-dw.service';
import { TimeDwController } from './time-dw.controller';
import { TimeDw } from './entities/time-dw.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TimeDw])],
  controllers: [TimeDwController],
  providers: [TimeDwService],
})
export class TimeDwModule {}
