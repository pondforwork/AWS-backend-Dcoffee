import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Product } from 'src/products/entities/product.entity';
import { Store } from 'src/stores/entities/store.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderItem } from './entities/order-item';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const employee = await this.employeeRepository.findOneBy({
      id: createOrderDto.empId,
    });
    const customer = await this.customerRepository.findOneBy({
      tel: createOrderDto.tel,
    });
    const store = await this.storeRepository.findOneBy({
      id: createOrderDto.storeId,
    });
    if (!employee || !customer || !store) {
      throw new NotFoundException();
    }
    const order: Order = new Order();
    order.employee = employee;
    order.customer = customer;
    order.store = store;
    order.payment = createOrderDto.payment;
    order.recevied = createOrderDto.recevied;
    order.date = new Date().toLocaleDateString();
    order.time = new Date().toLocaleTimeString();
    order.discount = createOrderDto.discount;
    await this.ordersRepository.save(order);

    for (const od of createOrderDto.orderItems) {
      const orderItem = new OrderItem();
      orderItem.amount = od.amount;
      orderItem.product = await this.productsRepository.findOneBy({
        id: od.productId,
      });
      orderItem.name = orderItem.product.name;
      orderItem.price = orderItem.product.price;
      orderItem.total = orderItem.price * orderItem.amount;
      orderItem.order = order;
      await this.orderItemsRepository.save(orderItem);
      order.amount = order.amount + orderItem.amount;
      order.total = order.total + orderItem.total;
    }
    order.total = order.total - order.discount;
    order.change = order.recevied - order.total;
    const res = await this.ordersRepository.save(order);
    if (customer.name !== 'ไม่เป็นสมาชิก') {
      customer.point = Number(customer.point) + Number(res.amount);
      console.log(customer.point);
      await this.customerRepository.update(customer.id, customer);
    }

    return await this.ordersRepository.findOne({
      where: { id: order.id },
      relations: ['orderItems', 'customer', 'employee', 'store'],
    });
  }

  findAll() {
    return this.ordersRepository.find({
      relations: ['orderItems', 'customer', 'employee', 'store'],
    });
  }

  findOne(id: number) {
    return this.ordersRepository.findOne({
      where: { id: id },
      relations: ['orderItems', 'customer', 'employee', 'store'],
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    const order = await this.ordersRepository.findOneBy({ id: id });
    return this.ordersRepository.softRemove(order);
  }
}
