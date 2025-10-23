import { Injectable } from '@nestjs/common';
import { CreateIvoDto } from './dto/create-ivo.dto';
import { UpdateIvoDto } from './dto/update-ivo.dto';

@Injectable()
export class IvoService {
  create(createIvoDto: CreateIvoDto) {
    return 'This action adds a new ivo';
  }

  findAll() {
    return `This action returns all ivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ivo`;
  }

  update(id: number, updateIvoDto: UpdateIvoDto) {
    return `This action updates a #${id} ivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ivo`;
  }
}
