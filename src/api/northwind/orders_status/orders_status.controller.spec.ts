import { Test, TestingModule } from '@nestjs/testing';
import { OrdersStatusController } from './orders_status.controller';
import { OrdersStatusService } from './orders_status.service';

describe('OrdersStatusController', () => {
  let controller: OrdersStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersStatusController],
      providers: [OrdersStatusService],
    }).compile();

    controller = module.get<OrdersStatusController>(OrdersStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
