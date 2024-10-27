import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = new Customer();
    newCustomer.name = createCustomerDto.name;
    newCustomer.tel = createCustomerDto.tel;
    newCustomer.point = createCustomerDto.point;
    newCustomer.startDate = new Date().toLocaleDateString();
    return this.customersRepository.save(newCustomer);
  }
  findAll() {
    return this.customersRepository.find();
  }

  findOne(id: number) {
    const customer = this.customersRepository.findOne({ where: { id: id } });
    if (!customer) {
      throw new NotFoundException();
    }
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException();
    }
    const updatedCustomer = { ...customer, ...updateCustomerDto };
    return this.customersRepository.save(updatedCustomer);
  }

  async remove(id: number) {
    const customer = await this.customersRepository.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException();
    }

    return this.customersRepository.softRemove(customer);
  }
}
