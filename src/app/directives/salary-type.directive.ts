import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryType]'
})
export class SalaryTypeDirective {

  constructor(private element: ElementRef) { 
  
  }
  @Input()
  set salaryType(value){
    const nativeElement : HTMLElement = this.element.nativeElement;
    const salary = parseFloat(value)
    let color
    if(salary > 20000){
      color = 'green'
    }else if(salary < 2000){
      color = 'red'
    }else{
      color = 'inherit'
    }
    nativeElement.style.color = color
  }
}
