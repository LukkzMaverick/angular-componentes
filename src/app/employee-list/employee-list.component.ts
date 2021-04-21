import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../employee.service';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  showMessageSucess: boolean = false;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent

  constructor(public employeeService: EmployeeService) {

   }

  ngOnInit(): void {
  }

  _getSalaryClass(salary){
    return this.employeeService.getSalaryClass(salary)  
  }

  openNewModal(){
    this.employeeNewModal.show()
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSucess = true;
  }

}
