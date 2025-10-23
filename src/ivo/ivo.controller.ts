import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IvoService } from './ivo.service';
import { CreateIvoDto } from './dto/create-ivo.dto';
import { UpdateIvoDto } from './dto/update-ivo.dto';

@Controller('ivo')
export class IvoController {
  constructor(private readonly ivoService: IvoService) {}

  @Post()
  create(@Body() createIvoDto: CreateIvoDto) {
    return this.ivoService.create(createIvoDto);
  }

  @Get()
  findAll() {
    return this.ivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIvoDto: UpdateIvoDto) {
    return this.ivoService.update(+id, updateIvoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivoService.remove(+id);
  }
}
