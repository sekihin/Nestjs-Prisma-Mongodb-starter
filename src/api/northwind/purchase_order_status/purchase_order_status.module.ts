import { Module } from '@nestjs/common';
import { PurchaseOrderStatusService } from './purchase_order_status.service';
import { PurchaseOrderStatusController } from './purchase_order_status.controller';

@Module({
  controllers: [PurchaseOrderStatusController],
  providers: [PurchaseOrderStatusService],
})
export class PurchaseOrderStatusModule {}
