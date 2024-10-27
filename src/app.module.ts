import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/entities/employee.entity';
import { SummarysalaryModule } from './summarysalary/summarysalary.module';
import { Summarysalary } from './summarysalary/entities/summarysalary.entity';
import { StoresModule } from './stores/stores.module';
import { Store } from './stores/entities/store.entity';
import { BillModule } from './bill/bill.module';
import { Bill } from './bill/entities/bill.entity';
import { BillDetail } from './bill/entities/bill-detail';
import { MaterialsModule } from './materials/materials.module';
import { Material } from './materials/entities/material.entity';
import { CheckMaterialModule } from './check_material/check_material.module';
import { CheckMaterial } from './check_material/entities/check_material.entity';
import { CheckMaterialDetail } from './check_material/entities/check_material_detail';
import { CheckinoutModule } from './checkinout/checkinout.module';
import { Checkinout } from './checkinout/entities/checkinout.entity';
import { ReportsModule } from './reports/reports.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './task/tasks.module';
import { CustommerDwModule } from './custommer-dw/custommer-dw.module';
import { EmployeeDwModule } from './employee-dw/employee-dw.module';
import { TimeDwModule } from './time-dw/time-dw.module';
import { StoreDw } from './store-dw/entities/store-dw.entity';
import { TimeDw } from './time-dw/entities/time-dw.entity';
import { CustommerDw } from './custommer-dw/entities/custommer-dw.entity';
import { EmployeeDw } from './employee-dw/entities/employee-dw.entity';
import { ProductDw } from './product-dw/entities/product-dw.entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ProductsModule,
    UsersModule,
    TypeOrmModule.forRoot(
      // {
      //   type: 'sqlite',
      //   database: 'dc-project.sqlite',
      //   entities: [
      //     Product,
      //     User,
      //     Order,
      //     OrderItem,
      //     Customer,
      //     Category,
      //     Employee,
      //     Summarysalary,
      //     Store,
      //     Bill,
      //     BillDetail,
      //     Material,
      //     CheckMaterial,
      //     CheckMaterialDetail,
      //   ],
      //   synchronize: true,
      // },

      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'dcoffee',
        entities: [
          Product,
          User,
          Order,
          OrderItem,
          Customer,
          Category,
          Employee,
          Summarysalary,
          Store,
          Bill,
          BillDetail,
          Material,
          Checkinout,
          CheckMaterial,
          CheckMaterialDetail,
        ],
        synchronize: true,
      },
    ),
    AuthModule,
    OrdersModule,
    CustomersModule,
    CategoriesModule,
    EmployeesModule,
    SummarysalaryModule,
    CheckinoutModule,
    StoresModule,
    BillModule,
    MaterialsModule,
    CheckMaterialModule,
    ReportsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
