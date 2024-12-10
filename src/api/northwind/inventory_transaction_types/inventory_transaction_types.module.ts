import { Module } from '@nestjs/common';
import { InventoryTransactionTypesService } from './inventory_transaction_types.service';
import { InventoryTransactionTypesController } from './inventory_transaction_types.controller';

@Module({
  controllers: [InventoryTransactionTypesController],
  providers: [InventoryTransactionTypesService],
})
export class InventoryTransactionTypesModule {}
