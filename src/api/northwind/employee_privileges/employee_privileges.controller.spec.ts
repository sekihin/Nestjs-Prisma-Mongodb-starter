import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePrivilegesController } from './employee_privileges.controller';
import { EmployeePrivilegesService } from './employee_privileges.service';

describe('EmployeePrivilegesController', () => {
  let controller: EmployeePrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeePrivilegesController],
      providers: [EmployeePrivilegesService],
    }).compile();

    controller = module.get<EmployeePrivilegesController>(EmployeePrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
