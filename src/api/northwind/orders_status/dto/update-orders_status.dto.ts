import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersStatusDto } from './create-orders_status.dto';

export class UpdateOrdersStatusDto extends PartialType(CreateOrdersStatusDto) {}
