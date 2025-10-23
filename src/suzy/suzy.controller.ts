import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuzyService } from './suzy.service';
import { CreateSuzyDto } from './dto/create-suzy.dto';
import { UpdateSuzyDto } from './dto/update-suzy.dto';

@Controller('suzy')
export class SuzyController {
  constructor(private readonly suzyService: SuzyService) {}

  @Post()
  create(@Body() createSuzyDto: CreateSuzyDto) {
    return this.suzyService.create(createSuzyDto);
  }

  @Get()
  findAll() {
    return this.suzyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suzyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuzyDto: UpdateSuzyDto) {
    return this.suzyService.update(+id, updateSuzyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suzyService.remove(+id);
  }
}
