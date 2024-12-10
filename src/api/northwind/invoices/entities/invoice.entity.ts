import { ApiProperty } from '@nestjs/swagger'

export class invoices {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: Number })
  amount_due: number = 0

  @ApiProperty({ type: String })
  invoice_date: string = ''

  @ApiProperty({ type: Number })
  order_id: number = 0

  @ApiProperty({ type: Number })
  shipping: number = 0

  @ApiProperty({ type: Number })
  tax: number = 0
}