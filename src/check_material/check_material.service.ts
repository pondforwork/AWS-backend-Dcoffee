import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCheckMaterialDto } from './dto/create-check_material.dto';
import { UpdateCheckMaterialDto } from './dto/update-check_material.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { CheckMaterial } from './entities/check_material.entity';
import { DataSource, Repository } from 'typeorm';
import { CheckMaterialDetail } from './entities/check_material_detail';
import { Material } from 'src/materials/entities/material.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class CheckMaterialService {
  constructor(
    @InjectRepository(CheckMaterial)
    private checkMaterialsRepository: Repository<CheckMaterial>,
    @InjectRepository(CheckMaterialDetail)
    private checkMaterialDetailsRepository: Repository<CheckMaterialDetail>,
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}
  async create(createCheckMaterialDto: CreateCheckMaterialDto) {
    const employee = await this.employeesRepository.findOneBy({
      id: createCheckMaterialDto.employeeId,
    });
    if (!employee) {
      throw new NotFoundException();
    }
    const checkM: CheckMaterial = new CheckMaterial();
    checkM.employee = employee;
    checkM.date = new Date().toLocaleDateString();
    checkM.time = new Date().toLocaleTimeString();
    await this.checkMaterialsRepository.save(checkM);

    for (const cmd of createCheckMaterialDto.check_material_detail) {
      const checkMD = new CheckMaterialDetail();
      checkMD.material = await this.materialsRepository.findOneBy({
        id: cmd.materialId,
      });
      checkMD.name = checkMD.material.name;
      checkMD.qty_last = checkMD.material.quantity;
      checkMD.qty_remain = cmd.qty_remain;
      checkMD.qty_expire = cmd.qty_expire;
      checkMD.check_material = checkM;
      checkMD.material.quantity = cmd.qty_remain;
      await this.materialsRepository.save(checkMD.material);
      await this.checkMaterialDetailsRepository.save(checkMD);
    }
    await this.checkMaterialsRepository.save(checkM);
    return await this.checkMaterialsRepository.findOne({
      where: { id: checkM.id },
      relations: ['check_material_detail', 'employee'],
    });
  }

  findAll() {
    return this.checkMaterialsRepository.find({
      relations: ['check_material_detail', 'employee'],
    });
  }
  async findAllDetail() {
    const query = await this.checkMaterialDetailsRepository.createQueryBuilder(
      'CheckMatDetail',
    );
    const q = await query
      .select('DISTINCT CheckMatDetail.name', 'name')
      .getRawMany();
    return q;
  }

  async findOne(id: number) {
    const checkM = await this.checkMaterialsRepository.findOne({
      where: { id: id },
      relations: ['check_material_detail', 'employee'],
    });
    if (!checkM) {
      throw new NotFoundException();
    }
    return checkM;
  }

  update(id: number, updateCheckMaterialDto: UpdateCheckMaterialDto) {
    return `This action updates a #${id} checkMaterial`;
  }

  async remove(id: number) {
    const checkM = await this.checkMaterialsRepository.findOneBy({ id: id });
    if (!checkM) {
      throw new NotFoundException();
    }
    return this.checkMaterialsRepository.softRemove(checkM);
  }
}
