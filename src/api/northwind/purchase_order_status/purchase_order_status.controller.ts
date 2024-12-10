import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseOrderStatusService } from './purchase_order_status.service';
import { CreatePurchaseOrderStatusDto } from './dto/create-purchase_order_status.dto';
import { UpdatePurchaseOrderStatusDto } from './dto/update-purchase_order_status.dto';

@Controller('purchase-order-status')
export class PurchaseOrderStatusController {
  constructor(private readonly purchaseOrderStatusService: PurchaseOrderStatusService) {}

  @Post()
  create(@Body() createPurchaseOrderStatusDto: CreatePurchaseOrderStatusDto) {
    return this.purchaseOrderStatusService.create(createPurchaseOrderStatusDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrderStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrderStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseOrderStatusDto: UpdatePurchaseOrderStatusDto) {
    return this.purchaseOrderStatusService.update(+id, updatePurchaseOrderStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrderStatusService.remove(+id);
  }
}
