import { Injectable } from '@nestjs/common';
import { CreateInventoryTransactionTypeDto } from './dto/create-inventory_transaction_type.dto';
import { UpdateInventoryTransactionTypeDto } from './dto/update-inventory_transaction_type.dto';

@Injectable()
export class InventoryTransactionTypesService {
  create(createInventoryTransactionTypeDto: CreateInventoryTransactionTypeDto) {
    return 'This action adds a new inventoryTransactionType';
  }

  findAll() {
    return `This action returns all inventoryTransactionTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryTransactionType`;
  }

  update(id: number, updateInventoryTransactionTypeDto: UpdateInventoryTransactionTypeDto) {
    return `This action updates a #${id} inventoryTransactionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryTransactionType`;
  }
}
