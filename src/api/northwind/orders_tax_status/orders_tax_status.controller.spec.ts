import { Test, TestingModule } from '@nestjs/testing';
import { OrdersTaxStatusController } from './orders_tax_status.controller';
import { OrdersTaxStatusService } from './orders_tax_status.service';

describe('OrdersTaxStatusController', () => {
  let controller: OrdersTaxStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersTaxStatusController],
      providers: [OrdersTaxStatusService],
    }).compile();

    controller = module.get<OrdersTaxStatusController>(OrdersTaxStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
