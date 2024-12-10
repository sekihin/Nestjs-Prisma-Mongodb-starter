import { orders } from '../../orders/entities/order.entity'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class employees {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: String })
  address: string = ''

  @ApiProperty({ type: String })
  business_phone: string = ''

  @ApiProperty({ type: String })
  city: string = ''

  @ApiProperty({ type: String })
  company: string = ''

  @ApiProperty({ type: String })
  country_region: string = ''

  @ApiProperty({ type: String })
  email_address: string = ''

  @ApiProperty({ type: String })
  fax_number: string = ''

  @ApiProperty({ type: String })
  first_name: string = ''

  @ApiProperty({ type: String })
  home_phone: string = ''

  @ApiProperty({ type: String })
  job_title: string = ''

  @ApiProperty({ type: String })
  last_name: string = ''

  @ApiPropertyOptional({ type: String })
  notes?: string = ''

  @ApiProperty({ type: String })
  state_province: string = ''

  @ApiProperty({ type: String })
  web_page: string = ''

  @ApiProperty({ type: Number })
  zip_postal_code: number = 0

  @ApiProperty({ isArray: true, type: () => orders })
  orders: orders[] = []
}