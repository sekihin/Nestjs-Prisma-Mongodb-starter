import { ApiProperty } from '@nestjs/swagger'

export class sales_reports {
  @ApiProperty({ type: String })
  id: string = ''

  @ApiProperty({ type: Number })
  default: number = 0

  @ApiProperty({ type: String })
  display: string = ''

  @ApiProperty({ type: String })
  filter_row_source: string = ''

  @ApiProperty({ type: String })
  group_by: string = ''

  @ApiProperty({ type: String })
  title: string = ''
}