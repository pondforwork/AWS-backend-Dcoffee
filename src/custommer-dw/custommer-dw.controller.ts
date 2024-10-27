import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustommerDwService } from './custommer-dw.service';
import { CreateCustommerDwDto } from './dto/create-custommer-dw.dto';
import { UpdateCustommerDwDto } from './dto/update-custommer-dw.dto';

@Controller('custommer-dw')
export class CustommerDwController {
  constructor(private readonly custommerDwService: CustommerDwService) {}

  @Post()
  create(@Body() createCustommerDwDto: CreateCustommerDwDto) {
    return this.custommerDwService.create(createCustommerDwDto);
  }

  @Get()
  findAll() {
    return this.custommerDwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.custommerDwService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustommerDwDto: UpdateCustommerDwDto,
  ) {
    return this.custommerDwService.update(+id, updateCustommerDwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.custommerDwService.remove(+id);
  }
}
