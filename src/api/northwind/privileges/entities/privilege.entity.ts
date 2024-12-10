import { ApiProperty } from '@nestjs/swagger'

export class privileges {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  privilege_name: string = ''
}