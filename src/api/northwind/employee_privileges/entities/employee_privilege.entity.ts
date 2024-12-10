import { ApiProperty } from '@nestjs/swagger'

export class employee_privileges {
  @ApiProperty({ type: String })
  id: string = ''

  @ApiProperty({ type: Number })
  employee_id: number = 0

  @ApiProperty({ type: Number })
  privilege_id: number = 0
}