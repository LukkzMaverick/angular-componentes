import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[modalContent]'
})
export class ModalContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
