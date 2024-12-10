import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTransactionTypesService } from './inventory_transaction_types.service';

describe('InventoryTransactionTypesService', () => {
  let service: InventoryTransactionTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryTransactionTypesService],
    }).compile();

    service = module.get<InventoryTransactionTypesService>(InventoryTransactionTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
