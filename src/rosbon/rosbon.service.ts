import { Injectable } from '@nestjs/common';
import { CreateRosbonDto } from './dto/create-rosbon.dto';
import { UpdateRosbonDto } from './dto/update-rosbon.dto';

@Injectable()
export class RosbonService {
  create(createRosbonDto: CreateRosbonDto) {
    return 'This action adds a new rosbon';
  }

  findAll() {
    return `This action returns all rosbon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rosbon`;
  }

  update(id: number, updateRosbonDto: UpdateRosbonDto) {
    return `This action updates a #${id} rosbon`;
  }

  remove(id: number) {
    return `This action removes a #${id} rosbon`;
  }
}
