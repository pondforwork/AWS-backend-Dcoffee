import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const category = await this.categoriesRepository.findOne({
      where: {
        id: createProductDto.categoryId,
      },
    });
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.price = createProductDto.price;
    newProduct.type = createProductDto.type;
    newProduct.size = createProductDto.size;
    newProduct.image = createProductDto.image;
    newProduct.category = category;
    return this.productsRepository.save(newProduct);
  }

  findByCategory(id: number) {
    return this.productsRepository.find({ where: { categoryId: id } });
  }

  findAll(option) {
    return this.productsRepository.find(option);
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({
      where: { id: id },
    });
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException();
    }
    const updatedProduct = { ...product, ...updateProductDto };
    return this.productsRepository.save(updatedProduct);
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException();
    }
    return this.productsRepository.softRemove(product);
  }
}
