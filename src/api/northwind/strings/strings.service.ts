import { Injectable } from '@nestjs/common';
import { CreateStringDto } from './dto/create-string.dto';
import { UpdateStringDto } from './dto/update-string.dto';

@Injectable()
export class StringsService {
  create(createStringDto: CreateStringDto) {
    return 'This action adds a new string';
  }

  findAll() {
    return `This action returns all strings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} string`;
  }

  update(id: number, updateStringDto: UpdateStringDto) {
    return `This action updates a #${id} string`;
  }

  remove(id: number) {
    return `This action removes a #${id} string`;
  }
}
