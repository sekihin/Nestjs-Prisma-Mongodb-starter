import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StringsService } from './strings.service';
import { CreateStringDto } from './dto/create-string.dto';
import { UpdateStringDto } from './dto/update-string.dto';

@Controller('strings')
export class StringsController {
  constructor(private readonly stringsService: StringsService) {}

  @Post()
  create(@Body() createStringDto: CreateStringDto) {
    return this.stringsService.create(createStringDto);
  }

  @Get()
  findAll() {
    return this.stringsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stringsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStringDto: UpdateStringDto) {
    return this.stringsService.update(+id, updateStringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stringsService.remove(+id);
  }
}
