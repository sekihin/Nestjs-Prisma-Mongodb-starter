import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeePrivilegesService } from './employee_privileges.service';
import { CreateEmployeePrivilegeDto } from './dto/create-employee_privilege.dto';
import { UpdateEmployeePrivilegeDto } from './dto/update-employee_privilege.dto';

@Controller('employee-privileges')
export class EmployeePrivilegesController {
  constructor(private readonly employeePrivilegesService: EmployeePrivilegesService) {}

  @Post()
  create(@Body() createEmployeePrivilegeDto: CreateEmployeePrivilegeDto) {
    return this.employeePrivilegesService.create(createEmployeePrivilegeDto);
  }

  @Get()
  findAll() {
    return this.employeePrivilegesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeePrivilegesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeePrivilegeDto: UpdateEmployeePrivilegeDto) {
    return this.employeePrivilegesService.update(+id, updateEmployeePrivilegeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeePrivilegesService.remove(+id);
  }
}
