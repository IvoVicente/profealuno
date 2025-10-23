import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RosbonService } from './rosbon.service';
import { CreateRosbonDto } from './dto/create-rosbon.dto';
import { UpdateRosbonDto } from './dto/update-rosbon.dto';

@Controller('rosbon')
export class RosbonController {
  constructor(private readonly rosbonService: RosbonService) {}

  @Post()
  create(@Body() createRosbonDto: CreateRosbonDto) {
    return this.rosbonService.create(createRosbonDto);
  }

  @Get()
  findAll() {
    return this.rosbonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rosbonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRosbonDto: UpdateRosbonDto) {
    return this.rosbonService.update(+id, updateRosbonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rosbonService.remove(+id);
  }
}
