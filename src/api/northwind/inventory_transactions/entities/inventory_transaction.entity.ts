import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class inventory_transactions {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiPropertyOptional({ type: String })
  comments?: string = ''

  @ApiProperty({ type: Number })
  product_id: number = 0

  @ApiProperty({ type: Number })
  quantity: number = 0

  @ApiProperty({ type: String })
  transaction_created_date: string = ''

  @ApiProperty({ type: String })
  transaction_modified_date: string = ''

  @ApiProperty({ type: Number })
  transaction_type: number = 0
}