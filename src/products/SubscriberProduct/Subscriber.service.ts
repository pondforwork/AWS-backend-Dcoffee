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

import { Product } from '../entities/product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }
  async beforeInsert(
    event: InsertEvent<Product>,
  ): Promise<void | Promise<any>> {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Product>) {
    console.log('+');
  }
}
