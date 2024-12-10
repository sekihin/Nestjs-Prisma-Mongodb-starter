import { Module } from '@nestjs/common';
import { EmployeePrivilegesService } from './employee_privileges.service';
import { EmployeePrivilegesController } from './employee_privileges.controller';

@Module({
  controllers: [EmployeePrivilegesController],
  providers: [EmployeePrivilegesService],
})
export class EmployeePrivilegesModule {}
