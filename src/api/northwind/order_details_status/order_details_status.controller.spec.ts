import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsStatusController } from './order_details_status.controller';
import { OrderDetailsStatusService } from './order_details_status.service';

describe('OrderDetailsStatusController', () => {
  let controller: OrderDetailsStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDetailsStatusController],
      providers: [OrderDetailsStatusService],
    }).compile();

    controller = module.get<OrderDetailsStatusController>(OrderDetailsStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
