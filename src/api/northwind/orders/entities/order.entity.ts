import { customers } from '../../customers/entities/customer.entity'
import { employees } from '../../employees/entities/employee.entity'
import { shippers } from '../../shippers/entities/shipper.entity'
import { order_details } from '../../order_details/entities/order_detail.entity'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class orders {
  @ApiProperty({ type: Number })
  id: number = 0

  @ApiProperty({ type: Number })
  customer_id: number = 0

  @ApiProperty({ type: Number })
  employee_id: number = 0

  @ApiProperty({ type: String })
  order_date: string = ''

  @ApiPropertyOptional({ type: String })
  paid_date?: string = ''

  @ApiPropertyOptional({ type: String })
  payment_type?: string = ''

  @ApiProperty({ type: String })
  ship_address: string = ''

  @ApiProperty({ type: String })
  ship_city: string = ''

  @ApiProperty({ type: String })
  ship_country_region: string = ''

  @ApiProperty({ type: String })
  ship_name: string = ''

  @ApiProperty({ type: String })
  ship_state_province: string = ''

  @ApiProperty({ type: Number })
  ship_zip_postal_code: number = 0

  @ApiPropertyOptional({ type: String })
  shipped_date?: string = ''

  @ApiProperty({ type: Number })
  shipper_id: number = 0

  @ApiProperty({ type: Number })
  shipping_fee: number = 0

  @ApiProperty({ type: Number })
  status_id: number = 0

  @ApiProperty({ type: Number })
  tax_rate: number = 0

  @ApiProperty({ type: Number })
  taxes: number = 0

  @ApiProperty({ type: () => customers })
  customer?: customers

  @ApiProperty({ type: () => employees })
  employee?: employees

  @ApiProperty({ type: () => shippers })
  shipper?: shippers

  @ApiProperty({ isArray: true, type: () => order_details })
  order_details: order_details[] = []
}