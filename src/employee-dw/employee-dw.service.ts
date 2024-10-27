import { Injectable } from '@nestjs/common';
import { CreateEmployeeDwDto } from './dto/create-employee-dw.dto';
import { UpdateEmployeeDwDto } from './dto/update-employee-dw.dto';

@Injectable()
export class EmployeeDwService {
  create(createEmployeeDwDto: CreateEmployeeDwDto) {
    return 'This action adds a new employeeDw';
  }

  findAll() {
    return `This action returns all employeeDw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeDw`;
  }

  update(id: number, updateEmployeeDwDto: UpdateEmployeeDwDto) {
    return `This action updates a #${id} employeeDw`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeDw`;
  }
}
