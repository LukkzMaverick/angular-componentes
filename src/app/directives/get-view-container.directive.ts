import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appGetViewContainer]'
})
export class GetViewContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
