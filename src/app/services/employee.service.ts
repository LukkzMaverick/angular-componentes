import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  salary: number;
  bonus: number;

}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = []

  constructor() { }

  getSalaryClass(salary){
    return salary <= 20000 ? 'lowSalary' : 'highSalary'
  }

  addEmployee(employee: Employee){
    if(employee.name !== ''){
      employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus
      this.employees.push(employee)
    }
  }

  deleteEmployee(employee: Employee){
    this.employees = this.employees.filter(empl => empl !== employee)
  }
}

