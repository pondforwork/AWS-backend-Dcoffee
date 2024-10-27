import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  IsNull,
  Repository,
  UpdateEvent,
} from 'typeorm';
import { Checkinout } from '../entities/checkinout.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Summarysalary } from 'src/summarysalary/entities/summarysalary.entity';

@EventSubscriber()
export class CheckinoutSubscriber
  implements EntitySubscriberInterface<Checkinout>
{
  constructor(
    dataSource: DataSource,
    @InjectRepository(Summarysalary)
    private SummarysalaryRepository: Repository<Summarysalary>,
    @InjectRepository(Checkinout)
    private CheckRepository: Repository<Checkinout>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Checkinout;
  }
  async beforeInsert(
    event: InsertEvent<Checkinout>,
  ): Promise<void | Promise<any>> {
    console.log('before Insert');
  }

  async afterUpdate(event: UpdateEvent<Checkinout>) {
    // const summarysalary = await this.SummarysalaryRepository.findOne({
    //   where: { Date: event.entity.date },
    //   relations: ['checkinouts'],
    // });
    // const Checkinout = await this.CheckRepository.findOne({
    //   where: { id: event.entity.id },
    //   relations: ['employee', 'summarysalary'],
    // });
    // if (summarysalary) {
    //   Checkinout.summarysalary = summarysalary;
    //   const res = await this.CheckRepository.save(Checkinout);
    //   console.log(res);
    // }
    // console.log(summarysalary);
    // console.log(Checkinout);
    // const Time = new Date();
    // if (!summarysalary) {
    //   const salary = new Summarysalary();
    //   salary.Date = Time.toLocaleDateString();
    //   salary.workhour = 0;
    //   salary.salary = 0;
    //   const NewSalary = await this.SummarysalaryRepository.save(salary);
    //   event.entity.summarysalary = NewSalary.id;
    //   const UpdateCio = await this.CheckRepository.save(event.entity);
    //   console.log(NewSalary);
    //   console.log(UpdateCio);
    // }
  }
}
