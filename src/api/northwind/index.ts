import { customers as _customers } from './customers/entities/customer.entity'
import { employee_privileges as _employee_privileges } from './employee_privileges/entities/employee_privilege.entity'
import { employees as _employees } from './employees/entities/employee.entity'
import { inventory_transaction_types as _inventory_transaction_types } from './inventory_transaction_types/entities/inventory_transaction_type.entity'
import { inventory_transactions as _inventory_transactions } from './inventory_transactions/entities/inventory_transaction.entity'
import { invoices as _invoices } from './invoices/entities/invoice.entity'
import { order_details as _order_details } from './order_details/entities/order_detail.entity'
import { order_details_status as _order_details_status } from './order_details_status/entities/order_details_status.entity'
import { orders as _orders } from './orders/entities/order.entity'
import { orders_status as _orders_status } from './orders_status/entities/orders_status.entity'
import { orders_tax_status as _orders_tax_status } from './orders_tax_status/entities/orders_tax_status.entity'
import { privileges as _privileges } from './privileges/entities/privilege.entity'
import { products as _products } from './products/entities/product.entity'
import { purchase_order_details as _purchase_order_details } from './purchase_order_details/entities/purchase_order_detail.entity'
import { purchase_order_status as _purchase_order_status } from './purchase_order_status/entities/purchase_order_status.entity'
import { purchase_orders as _purchase_orders } from './purchase_orders/entities/purchase_order.entity'
import { sales_reports as _sales_reports } from './sales_reports/entities/sales_report.entity'
import { shippers as _shippers } from './shippers/entities/shipper.entity'
import { strings as _strings } from './strings/entities/string.entity'
import { suppliers as _suppliers } from './suppliers/entities/supplier.entity'

export namespace PrismaModel {
  export class customers extends _customers {}
  export class employee_privileges extends _employee_privileges {}
  export class employees extends _employees {}
  export class inventory_transaction_types extends _inventory_transaction_types {}
  export class inventory_transactions extends _inventory_transactions {}
  export class invoices extends _invoices {}
  export class order_details extends _order_details {}
  export class order_details_status extends _order_details_status {}
  export class orders extends _orders {}
  export class orders_status extends _orders_status {}
  export class orders_tax_status extends _orders_tax_status {}
  export class privileges extends _privileges {}
  export class products extends _products {}
  export class purchase_order_details extends _purchase_order_details {}
  export class purchase_order_status extends _purchase_order_status {}
  export class purchase_orders extends _purchase_orders {}
  export class sales_reports extends _sales_reports {}
  export class shippers extends _shippers {}
  export class strings extends _strings {}
  export class suppliers extends _suppliers {}

  export const extraModels = [
    customers,
    employee_privileges,
    employees,
    inventory_transaction_types,
    inventory_transactions,
    invoices,
    order_details,
    order_details_status,
    orders,
    orders_status,
    orders_tax_status,
    privileges,
    products,
    purchase_order_details,
    purchase_order_status,
    purchase_orders,
    sales_reports,
    shippers,
    strings,
    suppliers,
  ]
}