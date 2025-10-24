import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmericoService } from './americo.service';
import { CreateAmericoDto } from './dto/create-americo.dto';
import { UpdateAmericoDto } from './dto/update-americo.dto';

@Controller('americo')
export class AmericoController {
  constructor(private readonly americoService: AmericoService) {}

  @Post()
  create(@Body() createAmericoDto: CreateAmericoDto) {
    return this.americoService.create(createAmericoDto);
  }

  @Get()
  findAll() {
    return this.americoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.americoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmericoDto: UpdateAmericoDto) {
    return this.americoService.update(+id, updateAmericoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.americoService.remove(+id);
  }
}
