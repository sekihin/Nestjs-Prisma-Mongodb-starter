import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderDetailsService } from './purchase_order_details.service';

describe('PurchaseOrderDetailsService', () => {
  let service: PurchaseOrderDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseOrderDetailsService],
    }).compile();

    service = module.get<PurchaseOrderDetailsService>(PurchaseOrderDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
