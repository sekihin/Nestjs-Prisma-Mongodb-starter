import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersTaxStatusDto } from './create-orders_tax_status.dto';

export class UpdateOrdersTaxStatusDto extends PartialType(CreateOrdersTaxStatusDto) {}
