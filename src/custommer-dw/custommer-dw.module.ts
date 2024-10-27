import { Module } from '@nestjs/common';
import { CustommerDwService } from './custommer-dw.service';
import { CustommerDwController } from './custommer-dw.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustommerDw } from './entities/custommer-dw.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustommerDw])],
  controllers: [CustommerDwController],
  providers: [CustommerDwService],
})
export class CustommerDwModule {}
