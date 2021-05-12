import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';
import { InputDirective } from '../../directives/input.directive';
import { EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild(InputDirective)
  inputName: InputDirective;

  // @ViewChild('inputTeste',{read: InputDirective})
  // inputName: InputDirective;

  constructor(private employeeService: EmployeeService) { 
    super()
  }

  ngOnInit() {
    super.ngOnInit()
    this.onShow.subscribe(()=>{
      this.inputName.focus()
    })
  }

  addEmployee(){
    this.employeeService.addEmployee(this.employee)
    this.onSubmit.emit(this.employee)
    this._resetEmployee()
    this.hide()
  }

  _resetEmployee(){
    this.employee = {
      name: '',
      salary: 0,
      bonus: 0
    }
  }

}
