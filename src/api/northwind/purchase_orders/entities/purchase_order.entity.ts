 import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class purchase_orders {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiPropertyOptional({ type: Number })
  approved_by?: number = 0

  @ApiPropertyOptional({ type: String })
  approved_date?: string = ''

  @ApiPropertyOptional({ type: Number })
  created_by?: number = 0

  @ApiProperty({ type: String })
  creation_date: string = ''

  @ApiPropertyOptional({ type: String })
  notes?: string = ''

  @ApiProperty({ type: Number })
  payment_amount: number = 0

  @ApiPropertyOptional({ type: String })
  payment_method?: string = ''

  @ApiProperty({ type: Number })
  shipping_fee: number = 0

  @ApiProperty({ type: Number })
  status_id: number = 0

  @ApiProperty({ type: Number })
  submitted_by: number = 0

  @ApiProperty({ type: String })
  submitted_date: string = ''

  @ApiProperty({ type: Number })
  supplier_id: number = 0

  @ApiProperty({ type: Number })
  taxes: number = 0
}