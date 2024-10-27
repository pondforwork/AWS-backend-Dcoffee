import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employees/entities/employee.entity';
import { Material } from 'src/materials/entities/material.entity';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { BillDetail } from './entities/bill-detail';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(BillDetail)
    private billdetailRepository: Repository<BillDetail>,
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) {}
  async create(createBillDto: CreateBillDto) {
    const newBill = new Bill();
    const employee = await this.employeeRepository.findOne({
      where: { id: createBillDto.employeeId },
    });
    if (!employee) {
      throw new NotFoundException();
    }
    newBill.employee = employee;
    newBill.shop_name = createBillDto.shop_name;
    newBill.date = new Date().toLocaleDateString();
    newBill.time = new Date().toLocaleTimeString();
    newBill.buy = createBillDto.buy;
    await this.billRepository.save(newBill);
    for (const item of createBillDto.billDetails) {
      const b_detail = new BillDetail();
      const material = await this.materialRepository.findOne({
        where: { id: item.materialId },
      });
      console.log(item.materialId);
      console.log(material);
      b_detail.amount = item.amount;
      b_detail.material = material;
      b_detail.price = item.price;
      b_detail.total = item.amount * item.price;
      b_detail.name = b_detail.material.name;
      b_detail.bill = newBill;
      material.quantity = Number(material.quantity) + Number(b_detail.amount);
      material.price_per_unit = b_detail.price;
      await this.materialRepository.save(material);
      await this.billdetailRepository.save(b_detail);
      newBill.total = newBill.total + b_detail.total;
      newBill.change = newBill.buy - newBill.total;
    }
    await this.billRepository.save(newBill);
    return this.billRepository.findOne({
      where: { id: newBill.id },
      relations: ['billDetails'],
    });
  }

  findAll() {
    return this.billRepository.find({ relations: ['employee', 'billDetails'] });
  }

  async findOne(id: number) {
    const bill = await this.billRepository.findOne({
      where: { id: id },
      relations: ['employee', 'billDetails'],
    });
    if (!bill) {
      throw new NotFoundException();
    }
    return bill;
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  async remove(id: number) {
    const bill = await this.billRepository.findOneBy({ id: id });
    if (!bill) {
      throw new NotFoundException();
    }
    return this.billRepository.softRemove(bill);
  }
}
