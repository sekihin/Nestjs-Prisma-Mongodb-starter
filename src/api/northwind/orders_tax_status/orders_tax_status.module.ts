import { Module } from '@nestjs/common';
import { OrdersTaxStatusService } from './orders_tax_status.service';
import { OrdersTaxStatusController } from './orders_tax_status.controller';

@Module({
  controllers: [OrdersTaxStatusController],
  providers: [OrdersTaxStatusService],
})
export class OrdersTaxStatusModule {}
