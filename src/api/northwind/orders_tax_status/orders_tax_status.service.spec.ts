import { Test, TestingModule } from '@nestjs/testing';
import { OrdersTaxStatusService } from './orders_tax_status.service';

describe('OrdersTaxStatusService', () => {
  let service: OrdersTaxStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersTaxStatusService],
    }).compile();

    service = module.get<OrdersTaxStatusService>(OrdersTaxStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
