import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailsStatusDto } from './create-order_details_status.dto';

export class UpdateOrderDetailsStatusDto extends PartialType(CreateOrderDetailsStatusDto) {}
