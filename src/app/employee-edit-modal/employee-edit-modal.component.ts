import { Component, ElementRef, OnInit, Output, Input } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee 

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

  editEmployee(){
    this.onSubmit.emit(this.employee)
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
