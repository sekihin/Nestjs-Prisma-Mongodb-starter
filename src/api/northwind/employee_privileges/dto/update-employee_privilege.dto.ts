import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeePrivilegeDto } from './create-employee_privilege.dto';

export class UpdateEmployeePrivilegeDto extends PartialType(CreateEmployeePrivilegeDto) {}
