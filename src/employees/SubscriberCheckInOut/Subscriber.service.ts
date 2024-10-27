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
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';
import { Employee } from '../entities/employee.entity';

@EventSubscriber()
export class EmployeeSubscriber implements EntitySubscriberInterface<Employee> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return ElementInternals;
  }
  async beforeInsert(
    event: InsertEvent<Employee>,
  ): Promise<void | Promise<any>> {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Employee>) {
    console.log('+');
  }
}
