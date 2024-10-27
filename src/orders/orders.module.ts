import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item';
import { Product } from 'src/products/entities/product.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Store } from 'src/stores/entities/store.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderItem,
      Customer,
      Product,
      Employee,
      Store,
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
