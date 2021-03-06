import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  showMessageSucess: boolean = false;
  employeeToEdit: Employee
  employeeToDelete: Employee

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: EmployeeEditModalComponent

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent
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

  openEditModal(employee: Employee){
    this.employeeToEdit = employee
    this.employeeEditModal.show()
  }

  openDeleteModal(employee: Employee){
    this.employeeToDelete = employee
    this.employeeDeleteModal.show()
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSucess = true;
  }

  onEditEmployee(employee: Employee){
    console.log(employee)
  }

  onDeleteEmployee(employ: Employee){
    console.log(employ)
  }

  fechou(event){
    console.log(event)
  }

}
