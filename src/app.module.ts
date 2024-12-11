import { Module } from '@nestjs/common';
import { OrdersStatusModule } from './api/northwind/orders_status/orders_status.module';

@Module({
  imports: [OrdersStatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
