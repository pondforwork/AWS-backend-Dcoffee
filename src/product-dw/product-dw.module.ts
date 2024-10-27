import { Module } from '@nestjs/common';
import { ProductDwService } from './product-dw.service';
import { ProductDwController } from './product-dw.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDw } from './entities/product-dw.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDw])],
  controllers: [ProductDwController],
  providers: [ProductDwService],
})
export class ProductDwModule {}
