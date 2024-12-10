import { ApiProperty } from '@nestjs/swagger'

export class order_details_status {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  status_name: string = ''
}