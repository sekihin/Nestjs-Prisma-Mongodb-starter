import { ApiProperty } from '@nestjs/swagger'

export class suppliers {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  company: string = ''

  @ApiProperty({ type: String })
  first_name: string = ''

  @ApiProperty({ type: String })
  job_title: string = ''

  @ApiProperty({ type: String })
  last_name: string = ''
}
