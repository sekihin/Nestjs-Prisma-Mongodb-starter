import { Injectable } from '@nestjs/common';
import { CreateOrdersTaxStatusDto } from './dto/create-orders_tax_status.dto';
import { UpdateOrdersTaxStatusDto } from './dto/update-orders_tax_status.dto';

@Injectable()
export class OrdersTaxStatusService {
  create(createOrdersTaxStatusDto: CreateOrdersTaxStatusDto) {
    return 'This action adds a new ordersTaxStatus';
  }

  findAll() {
    return `This action returns all ordersTaxStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersTaxStatus`;
  }

  update(id: number, updateOrdersTaxStatusDto: UpdateOrdersTaxStatusDto) {
    return `This action updates a #${id} ordersTaxStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersTaxStatus`;
  }
}
