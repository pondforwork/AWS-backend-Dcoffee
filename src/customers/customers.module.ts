import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

import { CustommerDwModule } from 'src/custommer-dw/custommer-dw.module';
import { CustommerDw } from 'src/custommer-dw/entities/custommer-dw.entity';
import { CustomerSubscriber } from './SubscriberCustomer/Subscriber.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, CustommerDw]),
    CustommerDwModule,
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerSubscriber],
})
export class CustomersModule {}
