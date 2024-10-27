import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  IsNull,
  Repository,
  UpdateEvent,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';

@EventSubscriber()
export class CheckinoutSubscriber implements EntitySubscriberInterface<Order> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Order;
  }
  async beforeInsert(event: InsertEvent<Order>): Promise<void | Promise<any>> {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Order>) {
    console.log('+');
  }
}
