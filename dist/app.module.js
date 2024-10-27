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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const product_entity_1 = require("./products/entities/product.entity");
const products_module_1 = require("./products/products.module");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const orders_module_1 = require("./orders/orders.module");
const order_entity_1 = require("./orders/entities/order.entity");
const order_item_1 = require("./orders/entities/order-item");
const customers_module_1 = require("./customers/customers.module");
const customer_entity_1 = require("./customers/entities/customer.entity");
const categories_module_1 = require("./categories/categories.module");
const category_entity_1 = require("./categories/entities/category.entity");
const employees_module_1 = require("./employees/employees.module");
const employee_entity_1 = require("./employees/entities/employee.entity");
const summarysalary_module_1 = require("./summarysalary/summarysalary.module");
const summarysalary_entity_1 = require("./summarysalary/entities/summarysalary.entity");
const stores_module_1 = require("./stores/stores.module");
const store_entity_1 = require("./stores/entities/store.entity");
const bill_module_1 = require("./bill/bill.module");
const bill_entity_1 = require("./bill/entities/bill.entity");
const bill_detail_1 = require("./bill/entities/bill-detail");
const materials_module_1 = require("./materials/materials.module");
const material_entity_1 = require("./materials/entities/material.entity");
const check_material_module_1 = require("./check_material/check_material.module");
const check_material_entity_1 = require("./check_material/entities/check_material.entity");
const check_material_detail_1 = require("./check_material/entities/check_material_detail");
const checkinout_module_1 = require("./checkinout/checkinout.module");
const checkinout_entity_1 = require("./checkinout/entities/checkinout.entity");
const reports_module_1 = require("./reports/reports.module");
const schedule_1 = require("@nestjs/schedule");
const tasks_module_1 = require("./task/tasks.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '12345678',
                database: 'dcoffee',
                entities: [
                    product_entity_1.Product,
                    user_entity_1.User,
                    order_entity_1.Order,
                    order_item_1.OrderItem,
                    customer_entity_1.Customer,
                    category_entity_1.Category,
                    employee_entity_1.Employee,
                    summarysalary_entity_1.Summarysalary,
                    store_entity_1.Store,
                    bill_entity_1.Bill,
                    bill_detail_1.BillDetail,
                    material_entity_1.Material,
                    checkinout_entity_1.Checkinout,
                    check_material_entity_1.CheckMaterial,
                    check_material_detail_1.CheckMaterialDetail,
                ],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule,
            customers_module_1.CustomersModule,
            categories_module_1.CategoriesModule,
            employees_module_1.EmployeesModule,
            summarysalary_module_1.SummarysalaryModule,
            checkinout_module_1.CheckinoutModule,
            stores_module_1.StoresModule,
            bill_module_1.BillModule,
            materials_module_1.MaterialsModule,
            check_material_module_1.CheckMaterialModule,
            reports_module_1.ReportsModule,
            tasks_module_1.TasksModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map