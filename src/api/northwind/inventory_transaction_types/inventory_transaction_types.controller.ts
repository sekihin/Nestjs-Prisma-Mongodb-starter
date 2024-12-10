import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryTransactionTypesService } from './inventory_transaction_types.service';
import { CreateInventoryTransactionTypeDto } from './dto/create-inventory_transaction_type.dto';
import { UpdateInventoryTransactionTypeDto } from './dto/update-inventory_transaction_type.dto';

@Controller('inventory-transaction-types')
export class InventoryTransactionTypesController {
  constructor(private readonly inventoryTransactionTypesService: InventoryTransactionTypesService) {}

  @Post()
  create(@Body() createInventoryTransactionTypeDto: CreateInventoryTransactionTypeDto) {
    return this.inventoryTransactionTypesService.create(createInventoryTransactionTypeDto);
  }

  @Get()
  findAll() {
    return this.inventoryTransactionTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryTransactionTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryTransactionTypeDto: UpdateInventoryTransactionTypeDto) {
    return this.inventoryTransactionTypesService.update(+id, updateInventoryTransactionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryTransactionTypesService.remove(+id);
  }
}
