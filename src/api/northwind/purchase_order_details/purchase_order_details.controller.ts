import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseOrderDetailsService } from './purchase_order_details.service';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase_order_detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase_order_detail.dto';

@Controller('purchase-order-details')
export class PurchaseOrderDetailsController {
  constructor(private readonly purchaseOrderDetailsService: PurchaseOrderDetailsService) {}

  @Post()
  create(@Body() createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto) {
    return this.purchaseOrderDetailsService.create(createPurchaseOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrderDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto) {
    return this.purchaseOrderDetailsService.update(+id, updatePurchaseOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrderDetailsService.remove(+id);
  }
}
