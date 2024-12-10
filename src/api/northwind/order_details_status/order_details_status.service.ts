import { Injectable } from '@nestjs/common';
import { CreateOrderDetailsStatusDto } from './dto/create-order_details_status.dto';
import { UpdateOrderDetailsStatusDto } from './dto/update-order_details_status.dto';

@Injectable()
export class OrderDetailsStatusService {
  create(createOrderDetailsStatusDto: CreateOrderDetailsStatusDto) {
    return 'This action adds a new orderDetailsStatus';
  }

  findAll() {
    return `This action returns all orderDetailsStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetailsStatus`;
  }

  update(id: number, updateOrderDetailsStatusDto: UpdateOrderDetailsStatusDto) {
    return `This action updates a #${id} orderDetailsStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetailsStatus`;
  }
}
