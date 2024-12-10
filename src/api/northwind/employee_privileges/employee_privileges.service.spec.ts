import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePrivilegesService } from './employee_privileges.service';

describe('EmployeePrivilegesService', () => {
  let service: EmployeePrivilegesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeePrivilegesService],
    }).compile();

    service = module.get<EmployeePrivilegesService>(EmployeePrivilegesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
