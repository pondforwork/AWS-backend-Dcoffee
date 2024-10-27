import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CreateCheckinoutDto } from './dto/create-checkinout.dto';
import { Checkinout } from './entities/checkinout.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class CheckinoutService {
  constructor(
    @InjectRepository(Checkinout)
    private checkinoutRepository: Repository<Checkinout>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  async create(createCheckinoutDto: CreateCheckinoutDto) {
    const employee = await this.employeesRepository.findOneBy({
      id: createCheckinoutDto.empId,
    });
    const newCheckIO = new Checkinout();
    newCheckIO.date = new Date().toLocaleDateString();
    newCheckIO.time_in = new Date().toLocaleTimeString();
    newCheckIO.employee = employee;

    return this.checkinoutRepository.save(newCheckIO);
  }

  findAll() {
    return this.checkinoutRepository.find();
  }

  findOne(id: number) {
    return this.checkinoutRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.checkinoutRepository.find({
      where: { employee: { email: email } },
    });
  }

  async findCheckStage(email: string) {
    console.log(email);
    const checkinout = await this.checkinoutRepository.findOne({
      relations: ['employee'],
      where: { employee: { email: email }, time_out: IsNull() },
    });
    if (!checkinout) {
      return true;
    }
    return false;
  }

  async update(data: any) {
    const checkinout = await this.checkinoutRepository.findOne({
      relations: ['employee'],
      where: {
        employee: { email: data.email },
        time_out: IsNull(),
      },
    });
    if (!checkinout) {
      throw new NotFoundException();
    }
    const time = new Date();
    checkinout.time_out = time.toLocaleTimeString();
    const timediff = Math.abs(
      time.getTime() - checkinout.createdDate.getTime(),
    );
    const h = Math.floor(timediff / (1000 * 60 * 60));
    const m = Math.floor((timediff / (1000 * 60)) % 60);
    const resultTime = `${h}.${m.toString().padStart(2, '0')}`;
    checkinout.total_hour = parseFloat(resultTime);
    return this.checkinoutRepository.save(checkinout);
  }

  async remove(id: number) {
    const checkinout = await this.checkinoutRepository.findOneBy({ id });
    if (!checkinout) {
      throw new NotFoundException();
    }
    return this.checkinoutRepository.softRemove(checkinout);
  }
}
