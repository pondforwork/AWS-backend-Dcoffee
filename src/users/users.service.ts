import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hash;
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find({
      relations: ['employee'],
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        tel: true,
        image: true,
      },

      order: { id: 'ASC' },
    });
  }
  findIsNotEmp() {
    return this.usersRepository.find({
      relations: ['employee'],
      where: { employee: { user: IsNull() } },
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email: email },
      relations: ['employee'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password !== undefined) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(updateUserDto.password, salt);
      updateUserDto.password = hash;
    }
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    const updatedUser = { ...user, ...updateUserDto };
    await this.usersRepository.save(updatedUser);
    return this.usersRepository.findOne({
      where: { id: id },
      relations: ['employee'],
    });
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    return this.usersRepository.softRemove(user);
  }
}
