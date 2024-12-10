import { Injectable } from '@nestjs/common';
import { CreateEmployeePrivilegeDto } from './dto/create-employee_privilege.dto';
import { UpdateEmployeePrivilegeDto } from './dto/update-employee_privilege.dto';

@Injectable()
export class EmployeePrivilegesService {
  create(createEmployeePrivilegeDto: CreateEmployeePrivilegeDto) {
    return 'This action adds a new employeePrivilege';
  }

  findAll() {
    return `This action returns all employeePrivileges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeePrivilege`;
  }

  update(id: number, updateEmployeePrivilegeDto: UpdateEmployeePrivilegeDto) {
    return `This action updates a #${id} employeePrivilege`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeePrivilege`;
  }
}
