import { ApiProperty } from '@nestjs/swagger'

export class orders_tax_status {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  tax_status_name: string = ''
}