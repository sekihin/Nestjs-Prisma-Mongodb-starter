import { order_details } from '../../order_details/entities/order_detail.entity'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class products {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  category: string = ''

  @ApiProperty({ type: Number })
  discontinued: number = 0

  @ApiProperty({ type: Number })
  list_price: number = 0

  @ApiPropertyOptional({ type: Number })
  minimum_reorder_quantity?: number = 0

  @ApiProperty({ type: String })
  product_code: string = ''

  @ApiProperty({ type: String })
  product_name: string = ''

  @ApiPropertyOptional({ type: String })
  quantity_per_unit?: string = ''

  @ApiProperty({ type: Number })
  reorder_level: number = 0

  @ApiProperty({ type: Number })
  standard_cost: number = 0

  @ApiProperty({ type: Object })
  supplier_ids: object = {}

  @ApiProperty({ type: Number })
  target_level: number  = 0

  @ApiProperty({ isArray: true, type: () => order_details })
  order_details: order_details[] = []
}