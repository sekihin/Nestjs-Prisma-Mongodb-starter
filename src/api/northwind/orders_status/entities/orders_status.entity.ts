import { ApiProperty } from '@nestjs/swagger'

export class orders_status {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  status_name: string = ''
}