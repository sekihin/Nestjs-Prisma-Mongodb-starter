import { Module } from '@nestjs/common';
import { OrdersStatusService } from './orders_status.service';
import { OrdersStatusController } from './orders_status.controller';

@Module({
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService],
})
export class OrdersStatusModule {}
