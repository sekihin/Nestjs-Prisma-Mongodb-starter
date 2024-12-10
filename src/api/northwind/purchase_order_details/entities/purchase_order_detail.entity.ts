import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class purchase_order_details {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiPropertyOptional({ type: String })
  date_received?: string = ''

  @ApiPropertyOptional({ type: Number })
  inventory_id?: number = 0

  @ApiProperty({ type: Number })
  posted_to_inventory: number = 0

  @ApiProperty({ type: Number })
  product_id: number = 0

  @ApiProperty({ type: Number })
  purchase_order_id: number = 0

  @ApiProperty({ type: Number })
  quantity: number = 0

  @ApiProperty({ type: Number })
  unit_cost: number = 0
}
