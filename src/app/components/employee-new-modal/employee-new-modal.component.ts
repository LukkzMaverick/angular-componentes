import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';
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

  @ViewChild('inputName')
  inputName: ElementRef;

  constructor(private employeeService: EmployeeService) { 
    super()
  }

  ngOnInit() {
    super.ngOnInit()
    this.onShow.subscribe(()=>{
      this.inputName.nativeElement.focus()
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
