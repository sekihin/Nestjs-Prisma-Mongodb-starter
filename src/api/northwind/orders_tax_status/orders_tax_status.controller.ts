import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersTaxStatusService } from './orders_tax_status.service';
import { CreateOrdersTaxStatusDto } from './dto/create-orders_tax_status.dto';
import { UpdateOrdersTaxStatusDto } from './dto/update-orders_tax_status.dto';

@Controller('orders-tax-status')
export class OrdersTaxStatusController {
  constructor(private readonly ordersTaxStatusService: OrdersTaxStatusService) {}

  @Post()
  create(@Body() createOrdersTaxStatusDto: CreateOrdersTaxStatusDto) {
    return this.ordersTaxStatusService.create(createOrdersTaxStatusDto);
  }

  @Get()
  findAll() {
    return this.ordersTaxStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersTaxStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersTaxStatusDto: UpdateOrdersTaxStatusDto) {
    return this.ordersTaxStatusService.update(+id, updateOrdersTaxStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersTaxStatusService.remove(+id);
  }
}
