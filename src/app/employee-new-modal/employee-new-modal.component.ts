import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal()
    $(divModal).modal('show')
  }

  hide(){
    const divModal = this.getDivModal()
    $(divModal).modal('hide')
  }

  private getDivModal() : HTMLElement{
    const nativeElement:HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement
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
