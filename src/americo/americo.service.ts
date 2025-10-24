import { Injectable } from '@nestjs/common';
import { CreateAmericoDto } from './dto/create-americo.dto';
import { UpdateAmericoDto } from './dto/update-americo.dto';

@Injectable()
export class AmericoService {
  create(createAmericoDto: CreateAmericoDto) {
    return 'This action adds a new americo';
  }

  findAll() {
    return `This action returns all americo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} americo`;
  }

  update(id: number, updateAmericoDto: UpdateAmericoDto) {
    return `This action updates a #${id} americo`;
  }

  remove(id: number) {
    return `This action removes a #${id} americo`;
  }
}
