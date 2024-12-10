import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderDetailsStatusService } from './order_details_status.service';
import { CreateOrderDetailsStatusDto } from './dto/create-order_details_status.dto';
import { UpdateOrderDetailsStatusDto } from './dto/update-order_details_status.dto';

@Controller('order-details-status')
export class OrderDetailsStatusController {
  constructor(private readonly orderDetailsStatusService: OrderDetailsStatusService) {}

  @Post()
  create(@Body() createOrderDetailsStatusDto: CreateOrderDetailsStatusDto) {
    return this.orderDetailsStatusService.create(createOrderDetailsStatusDto);
  }

  @Get()
  findAll() {
    return this.orderDetailsStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDetailsStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDetailsStatusDto: UpdateOrderDetailsStatusDto) {
    return this.orderDetailsStatusService.update(+id, updateOrderDetailsStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDetailsStatusService.remove(+id);
  }
}
