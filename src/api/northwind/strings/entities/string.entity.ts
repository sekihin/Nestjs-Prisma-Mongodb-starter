import { ApiProperty } from '@nestjs/swagger'

export class strings {
  @ApiProperty({ type: String })
  id: string = ''

  @ApiProperty({ type: String })
  string_data: string = ''

  @ApiProperty({ type: Number })
  string_id: number = 0
}