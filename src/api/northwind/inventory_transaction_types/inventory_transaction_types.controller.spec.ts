import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTransactionTypesController } from './inventory_transaction_types.controller';
import { InventoryTransactionTypesService } from './inventory_transaction_types.service';

describe('InventoryTransactionTypesController', () => {
  let controller: InventoryTransactionTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryTransactionTypesController],
      providers: [InventoryTransactionTypesService],
    }).compile();

    controller = module.get<InventoryTransactionTypesController>(InventoryTransactionTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
