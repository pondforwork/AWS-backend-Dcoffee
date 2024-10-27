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
import { Customer } from '../entities/customer.entity';
import { CustommerDw } from 'src/custommer-dw/entities/custommer-dw.entity';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
  constructor(
    dataSource: DataSource,
    @InjectRepository(CustommerDw)
    private CustomerDWRepository: Repository<CustommerDw>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Customer;
  }
  async beforeInsert(event: InsertEvent<Customer>) {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Customer>) {
    console.log('+');
  }

  // async afterInsert(event: InsertEvent<Customer>) {
  //   const NewCusDw = new CustommerDw();
  //   NewCusDw.Customer_dw_name = event.entity.name;
  //   NewCusDw.Customer_dw_startdate = event.entity.startDate;
  //   await this.CustomerDWRepository.save(NewCusDw);
  // }
}
