import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CreateSummarysalaryDto } from './dto/create-summarysalary.dto';
import { UpdateSummarysalaryDto } from './dto/update-summarysalary.dto';
import { Summarysalary } from './entities/summarysalary.entity';
import { Checkinout } from 'src/checkinout/entities/checkinout.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class SummarysalaryService {
  constructor(
    @InjectRepository(Summarysalary)
    private summarysalaryRepository: Repository<Summarysalary>,
    @InjectRepository(Checkinout)
    private CheckinOutRepository: Repository<Checkinout>,
    @InjectRepository(Employee)
    private EmployeeOutRepository: Repository<Employee>,
  ) {}
  async create() {
    const CheckinoutAll = await this.CheckinOutRepository.find({
      where: { summarysalary: IsNull() },
      relations: ['summarysalary', 'employee'],
    });

    const NewSalary = new Summarysalary();
    NewSalary.salary = 0;
    NewSalary.workhour = 0;
    NewSalary.Date = new Date().toLocaleDateString();
    const salary = await this.summarysalaryRepository.save(NewSalary);

    for (const item of CheckinoutAll) {
      const employee = await this.EmployeeOutRepository.findOne({
        where: { email: item.employee.email },
      });
      // console.log(item.employee.email);
      const salary_per_emp = employee.hourly_wage * item.total_hour;
      salary.workhour = salary.workhour + item.total_hour;

      salary.salary = Number(salary.salary) + Number(salary_per_emp);
      item.summarysalary = salary;
      // console.log(salary_per_emp);
      // console.log(NewSalary.salary);
      // console.log(NewSalary.workhour);
      await this.CheckinOutRepository.save(item);
      await this.summarysalaryRepository.save(salary);
    }
    return 0;
  }

  findAll() {
    return this.summarysalaryRepository.find();
  }

  findOne(id: number) {
    return this.summarysalaryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSummarysalaryDto: UpdateSummarysalaryDto) {
    const summarysalary = await this.summarysalaryRepository.findOneBy({ id });
    if (!summarysalary) {
      throw new NotFoundException();
    }
    const updateSummarysalary = { ...summarysalary, ...updateSummarysalaryDto };
    return this.summarysalaryRepository.save(updateSummarysalary);
  }

  async remove(id: number) {
    const summarysalary = await this.summarysalaryRepository.findOneBy({ id });
    if (!summarysalary) {
      throw new NotFoundException();
    }
    return this.summarysalaryRepository.softRemove(summarysalary);
  }
}
