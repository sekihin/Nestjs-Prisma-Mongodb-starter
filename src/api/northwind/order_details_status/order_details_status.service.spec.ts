import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsStatusService } from './order_details_status.service';

describe('OrderDetailsStatusService', () => {
  let service: OrderDetailsStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDetailsStatusService],
    }).compile();

    service = module.get<OrderDetailsStatusService>(OrderDetailsStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
