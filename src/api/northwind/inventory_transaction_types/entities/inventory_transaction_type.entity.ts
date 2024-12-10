import { ApiProperty } from '@nestjs/swagger'

export class inventory_transaction_types {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  type_name: string = ''
}