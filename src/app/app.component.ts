import { GetViewContainerDirective } from './directives/get-view-container.directive';
import {
    TestDynamicComponentComponent
} from './components/test-dynamic-component/test-dynamic-component.component';
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

  constructor(private componentFactoryResolver: ComponentFactoryResolver){

  }

  ngAfterViewInit(){
    console.log(this.viewContainer)
    this.viewContainer.createEmbeddedView(this.template)

    const componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(TestDynamicComponentComponent)

    this.getViewContainer.viewContainerRef.createComponent(componentFactory)
  }
}
