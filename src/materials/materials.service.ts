import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) {}
  create(createMaterialDto: CreateMaterialDto) {
    return this.materialRepository.save(createMaterialDto);
  }

  findAll() {
    return this.materialRepository.find();
  }

  findOne(id: number) {
    return this.materialRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    const material = await this.materialRepository.findOneBy({ id });
    if (!material) {
      throw new NotFoundException();
    }
    const updatedMaterial = { ...material, ...updateMaterialDto };
    return this.materialRepository.save(updatedMaterial);
  }

  async remove(id: number) {
    const material = await this.materialRepository.findOne({
      where: { id: id },
    });
    if (!material) {
      throw new NotFoundException();
    }
    return this.materialRepository.remove(material);
  }
}
