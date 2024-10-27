import { Injectable, Query } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { query } from 'express';

@Injectable()
export class ReportsService {
  getOder() {
    return this.DataSource.query('CALL getOrder()');
  }
  getProduct() {
    return this.DataSource.query('SELECT * FROM product');
  }
  getMaterialBySearchText(searchText: string) {
    return this.DataSource.query('SELECT * FROM material WHERE name LIKE ?', [
      `%${searchText}%`,
    ]);
  }
  constructor(@InjectDataSource() private DataSource: DataSource) {}

  getMaterial() {
    return this.DataSource.query('SELECT * FROM material');
  }
  getMaterial_info() {
    return this.DataSource.query(
      'SELECT * FROM material WHERE quantity <= min_quantity',
    );
  }

  // create(createReportDto: CreateReportDto) {
  //   return 'This action adds a new report';
  // }

  // findAll() {
  //   return `This action returns all reports`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} report`;
  // }

  // update(id: number, updateReportDto: UpdateReportDto) {
  //   return `This action updates a #${id} report`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} report`;
  // }
}
