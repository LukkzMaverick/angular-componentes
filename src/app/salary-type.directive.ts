import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryType]'
})
export class SalaryTypeDirective {

  @Input()
  salaryType;

  constructor(private element: ElementRef) { 
    setTimeout(() => {
      const nativeElement : HTMLElement = this.element.nativeElement;
      const salary = parseFloat(this.salaryType)
      let color
      if(salary > 20000){
        color = 'green'
      }else if(salary < 2000){
        color = 'red'
      }else{
        color = 'inherit'
      }
      nativeElement.style.color = color
    }, 0);
  }

}
