import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreDwModule } from 'src/store-dw/store-dw.module';
import { StoreDw } from 'src/store-dw/entities/store-dw.entity';
import { StoreSubscriber } from './SubscriberStore/Subscriber.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],

  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
