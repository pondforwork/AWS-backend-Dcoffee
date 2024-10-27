import { Module } from '@nestjs/common';
import { StoreDwService } from './store-dw.service';
import { StoreDwController } from './store-dw.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreDw } from './entities/store-dw.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreDw])],
  controllers: [StoreDwController],
  providers: [StoreDwService],
})
export class StoreDwModule {}
