import { orders } from '../../orders/entities/order.entity'
import { ApiProperty } from '@nestjs/swagger'

export class shippers {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  address: string = ''

  @ApiProperty({ type: String })
  city: string = ''

  @ApiProperty({ type: String })
  company: string = ''

  @ApiProperty({ type: String })
  country_region: string = ''

  @ApiProperty({ type: String })
  state_province: string = ''

  @ApiProperty({ type: Number })
  zip_postal_code: number = 0

  @ApiProperty({ isArray: true, type: () => orders })
  orders: orders[] = []
}