SELECT * FROM `customers` INTO OUTFILE '/var/lib/mysql-files/customers.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `employee_privileges` INTO OUTFILE '/var/lib/mysql-files/employee_privileges.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `employees` INTO OUTFILE '/var/lib/mysql-files/employees.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `inventory_transaction_types` INTO OUTFILE '/var/lib/mysql-files/inventory_transaction_types.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `inventory_transactions` INTO OUTFILE '/var/lib/mysql-files/inventory_transactions.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `invoices` INTO OUTFILE '/var/lib/mysql-files/invoices.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `order_details` INTO OUTFILE '/var/lib/mysql-files/order_details.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `order_details_status` INTO OUTFILE '/var/lib/mysql-files/order_details_status.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `orders` INTO OUTFILE '/var/lib/mysql-files/orders.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `orders_status` INTO OUTFILE '/var/lib/mysql-files/orders_status.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `orders_tax_status` INTO OUTFILE '/var/lib/mysql-files/orders_tax_status.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `privileges` INTO OUTFILE '/var/lib/mysql-files/privileges.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `products` INTO OUTFILE '/var/lib/mysql-files/products.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `purchase_order_details` INTO OUTFILE '/var/lib/mysql-files/purchase_order_details.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `purchase_order_status` INTO OUTFILE '/var/lib/mysql-files/purchase_order_status.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `purchase_orders` INTO OUTFILE '/var/lib/mysql-files/purchase_orders.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `sales_reports` INTO OUTFILE '/var/lib/mysql-files/sales_reports.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `shippers` INTO OUTFILE '/var/lib/mysql-files/shippers.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `strings` INTO OUTFILE '/var/lib/mysql-files/strings.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
SELECT * FROM `suppliers` INTO OUTFILE '/var/lib/mysql-files/suppliers.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
