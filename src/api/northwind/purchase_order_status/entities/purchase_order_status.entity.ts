import { ApiProperty } from '@nestjs/swagger'

export class purchase_order_status {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  status: string = ''
}