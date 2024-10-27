import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreDwService } from './store-dw.service';
import { CreateStoreDwDto } from './dto/create-store-dw.dto';
import { UpdateStoreDwDto } from './dto/update-store-dw.dto';

@Controller('store-dw')
export class StoreDwController {
  constructor(private readonly storeDwService: StoreDwService) {}

  @Post()
  create(@Body() createStoreDwDto: CreateStoreDwDto) {
    return this.storeDwService.create(createStoreDwDto);
  }

  @Get()
  findAll() {
    return this.storeDwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeDwService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDwDto: UpdateStoreDwDto) {
    return this.storeDwService.update(+id, updateStoreDwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeDwService.remove(+id);
  }
}
