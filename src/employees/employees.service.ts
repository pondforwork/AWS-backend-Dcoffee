import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = new Employee();
    newEmployee.name = createEmployeeDto.name;
    newEmployee.tel = createEmployeeDto.tel;
    newEmployee.email = createEmployeeDto.email;
    newEmployee.address = createEmployeeDto.address;
    newEmployee.hourly_wage = createEmployeeDto.hourly_wage;
    newEmployee.position = createEmployeeDto.position;
    const user = await this.userRepository.findOne({
      where: { email: createEmployeeDto.email },
    });
    if (!user) {
      throw new NotFoundException();
    }
    newEmployee.user = user;
    return this.employeesRepository.save(newEmployee);
  }

  findAll() {
    return this.employeesRepository.find({
      select: {
        user: { id: true, name: true, tel: true, email: true, image: true },
      },
      relations: ['user'],
    });
  }

  findOne(id: number) {
    return this.employeesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeesRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException();
    }
    const updatedEmployee = { ...employee, ...updateEmployeeDto };

    return this.employeesRepository.save(updatedEmployee);
  }

  async remove(id: number) {
    const employee = await this.employeesRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException();
    }
    return this.employeesRepository.remove(employee);
  }
}
