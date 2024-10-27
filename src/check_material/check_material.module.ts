import { Module } from '@nestjs/common';
import { CheckMaterialService } from './check_material.service';
import { CheckMaterialController } from './check_material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckMaterial } from './entities/check_material.entity';
import { CheckMaterialDetail } from './entities/check_material_detail';
import { Material } from 'src/materials/entities/material.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CheckMaterial,
      CheckMaterialDetail,
      Material,
      Employee,
    ]),
  ],
  controllers: [CheckMaterialController],
  providers: [CheckMaterialService],
})
export class CheckMaterialModule {}
