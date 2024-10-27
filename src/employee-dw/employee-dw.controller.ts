import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeDwService } from './employee-dw.service';
import { CreateEmployeeDwDto } from './dto/create-employee-dw.dto';
import { UpdateEmployeeDwDto } from './dto/update-employee-dw.dto';

@Controller('employee-dw')
export class EmployeeDwController {
  constructor(private readonly employeeDwService: EmployeeDwService) {}

  @Post()
  create(@Body() createEmployeeDwDto: CreateEmployeeDwDto) {
    return this.employeeDwService.create(createEmployeeDwDto);
  }

  @Get()
  findAll() {
    return this.employeeDwService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeDwService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDwDto: UpdateEmployeeDwDto,
  ) {
    return this.employeeDwService.update(+id, updateEmployeeDwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeDwService.remove(+id);
  }
}
