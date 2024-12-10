import { Module } from '@nestjs/common';
import { PurchaseOrderDetailsService } from './purchase_order_details.service';
import { PurchaseOrderDetailsController } from './purchase_order_details.controller';

@Module({
  controllers: [PurchaseOrderDetailsController],
  providers: [PurchaseOrderDetailsService],
})
export class PurchaseOrderDetailsModule {}
