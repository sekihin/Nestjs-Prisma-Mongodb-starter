import { orders } from '../../orders/entities/order.entity'
import { products } from '../../products/entities/product.entity'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class order_details {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: Number })
  discount: number = 0

  @ApiPropertyOptional({ type: Number })
  inventory_id?: number = 0

  @ApiProperty({ type: Number })
  order_id: number = 0

  @ApiProperty({ type: Number })
  product_id: number = 0

  @ApiPropertyOptional({ type: Number })
  purchase_order_id?: number = 0

  @ApiProperty({ type: Number })
  quantity: number = 0

  @ApiProperty({ type: Number })
  status_id: number = 0

  @ApiProperty({ type: Number })
  unit_price: number = 0

  @ApiProperty({ type: () => orders })
  order: orders = new orders()

  @ApiProperty({ type: () => products })
  product: products = new products()
}