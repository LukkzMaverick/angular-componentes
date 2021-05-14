import { GetViewContainerDirective } from './directives/get-view-container.directive';
import {
    TestDynamicComponentComponent
} from './components/test-dynamic-component/test-dynamic-component.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ModalServiceService } from './components/modal-dynamic/modal-service.service';
import {
    TestModalDynamicComponent
} from './components/test-modal-dynamic/test-modal-dynamic.component';
import { ComponentFactoryResolver } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iniciando-angular7';

  @ViewChild('employeeList', {read: ViewContainerRef})
  viewContainer: ViewContainerRef
  @ViewChild('template')
  template: TemplateRef<any>
  
  @ViewChild(GetViewContainerDirective)
  getViewContainer: GetViewContainerDirective

  components = [
    TestDynamicComponentComponent,
    EmployeeListComponent
  ]
  indexComponents = -1

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modalService: ModalServiceService){

  }

  ngOnInit(){
    setInterval(()=>{
      this.getViewContainer.viewContainerRef.clear()
      this.indexComponents++
      if(this.indexComponents === this.components.length){
        this.indexComponents = 0
      }
      const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.components[this.indexComponents])

      this.getViewContainer.viewContainerRef.createComponent(componentFactory)
    }, 4000)

    this.modalService.open(TestModalDynamicComponent)
  }

  // ngAfterViewInit(){
  //   console.log(this.viewContainer)
  //   this.viewContainer.createEmbeddedView(this.template)

    

  //   setInterval(()=>{
  //     this.getViewContainer.viewContainerRef.clear()
  //     this.indexComponents++
  //     if(this.indexComponents === this.components.length){
  //       this.indexComponents = 0
  //     }
  //     const componentFactory = this.componentFactoryResolver
  //     .resolveComponentFactory(this.components[this.indexComponents])

  //     this.getViewContainer.viewContainerRef.createComponent(componentFactory)
  //   }, 4000)
  // }
}
