import { ModalContentDirective } from '../modal-content.directive';
import { ElementRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

declare const $

@Component({
  selector: 'modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styleUrls: ['./modal-dynamic.component.css']
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective, {static: true}) 
  modalContent: ModalContentDirective

  show(): void{
    $(this.divModal).modal('show')
  }

  hide(): void{
    $(this.divModal).modal('hide')
  }

  get divModal(){
    const nativeElement: HTMLElement = this.elementRef.nativeElement
    return nativeElement.firstChild as HTMLElement
  }

  constructor(private componentFactoryResolver :ComponentFactoryResolver, 
    private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  mount(component){
    const componentFactory = 
    this.componentFactoryResolver.resolveComponentFactory(component)
    this.modalContent.viewContainerRef.createComponent(componentFactory)
  }

}
