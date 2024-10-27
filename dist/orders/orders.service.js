"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("../customers/entities/customer.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
const product_entity_1 = require("../products/entities/product.entity");
const store_entity_1 = require("../stores/entities/store.entity");
const typeorm_2 = require("typeorm");
const order_item_1 = require("./entities/order-item");
const order_entity_1 = require("./entities/order.entity");
let OrdersService = class OrdersService {
    constructor(ordersRepository, customerRepository, productsRepository, orderItemsRepository, employeeRepository, storeRepository) {
        this.ordersRepository = ordersRepository;
        this.customerRepository = customerRepository;
        this.productsRepository = productsRepository;
        this.orderItemsRepository = orderItemsRepository;
        this.employeeRepository = employeeRepository;
        this.storeRepository = storeRepository;
    }
    async create(createOrderDto) {
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
            throw new common_1.NotFoundException();
        }
        const order = new order_entity_1.Order();
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
            const orderItem = new order_item_1.OrderItem();
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
    findOne(id) {
        return this.ordersRepository.findOne({
            where: { id: id },
            relations: ['orderItems', 'customer', 'employee', 'store'],
        });
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    async remove(id) {
        const order = await this.ordersRepository.findOneBy({ id: id });
        return this.ordersRepository.softRemove(order);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(order_item_1.OrderItem)),
    __param(4, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(5, (0, typeorm_1.InjectRepository)(store_entity_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map