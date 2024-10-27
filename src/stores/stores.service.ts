import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}
  create(createStoreDto: CreateStoreDto) {
    return this.storesRepository.save(createStoreDto);
  }

  findAll() {
    return this.storesRepository.find();
  }

  findOne(id: number) {
    return this.storesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const store = await this.storesRepository.findOneBy({ id });
    if (!store) {
      throw new NotFoundException();
    }
    const updatedEmployee = { ...store, ...updateStoreDto };

    return this.storesRepository.save(updatedEmployee);
  }

  async remove(id: number) {
    const store = await this.storesRepository.findOneBy({ id });
    if (!store) {
      throw new NotFoundException();
    }
    return this.storesRepository.softRemove(store);
  }
}
