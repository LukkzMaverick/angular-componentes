import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }
  
  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addEmployee(this.employee)
    this._resetEmployee()
  }

  _getSalaryClass(salary){
    return this.employeeService.getSalaryClass(salary)  
  }

  _resetEmployee(){
    this.employee = {
      name: '',
      salary: 0,
      bonus: 0
    }
  }

}
