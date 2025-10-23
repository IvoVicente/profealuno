import { Injectable } from '@nestjs/common';
import { CreateSuzyDto } from './dto/create-suzy.dto';
import { UpdateSuzyDto } from './dto/update-suzy.dto';

@Injectable()
export class SuzyService {
  create(createSuzyDto: CreateSuzyDto) {
    return 'This action adds a new suzy';
  }

  findAll() {
    return `This action returns all suzy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suzy`;
  }

  update(id: number, updateSuzyDto: UpdateSuzyDto) {
    return `This action updates a #${id} suzy`;
  }

  remove(id: number) {
    return `This action removes a #${id} suzy`;
  }
}
