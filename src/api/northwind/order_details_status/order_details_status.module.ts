import { Module } from '@nestjs/common';
import { OrderDetailsStatusService } from './order_details_status.service';
import { OrderDetailsStatusController } from './order_details_status.controller';

@Module({
  controllers: [OrderDetailsStatusController],
  providers: [OrderDetailsStatusService],
})
export class OrderDetailsStatusModule {}
