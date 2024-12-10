import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderStatusDto } from './create-purchase_order_status.dto';

export class UpdatePurchaseOrderStatusDto extends PartialType(CreatePurchaseOrderStatusDto) {}
