import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';
import { EmbeddedViewRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Injector } from '@angular/core';
import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
    private injector: Injector, private appRef: ApplicationRef) { }

  open(modalImplementedComponent){
    const componentRef = this.componentFactoryResolver.
    resolveComponentFactory(ModalDynamicComponent).create(this.injector)
    componentRef.instance.mount(modalImplementedComponent)
    this.appRef.attachView(componentRef.hostView)

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
    
    document.body.appendChild(domElement)
    componentRef.instance.show()

  }
}
