import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryTransactionTypeDto } from './create-inventory_transaction_type.dto';

export class UpdateInventoryTransactionTypeDto extends PartialType(CreateInventoryTransactionTypeDto) {}
