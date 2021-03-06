import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCurrencyPipe } from './pipes/my-currency.pipe'
import {
    EmployeeDeleteModalComponent
} from './components/employee-delete-modal/employee-delete-modal.component';
import {
    EmployeeEditModalComponent
} from './components/employee-edit-modal/employee-edit-modal.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import {
    EmployeeNewModalComponent
} from './components/employee-new-modal/employee-new-modal.component';
import { SalaryTypeDirective } from './directives/salary-type.directive';
import { ModalComponent } from './components/modal/modal.component';
import { InputDirective } from './directives/input.directive';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { TestDynamicComponentComponent } from './components/test-dynamic-component/test-dynamic-component.component';
import { ModalDynamicComponent } from './components/modal-dynamic/modal-dynamic/modal-dynamic.component';
import { ModalContentDirective } from './components/modal-dynamic/modal-content.directive';
import { ModalTitleComponent } from './components/modal-dynamic/modal-title/modal-title.component';
import { ModalBodyComponent } from './components/modal-dynamic/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal-dynamic/modal-footer/modal-footer.component';
import { TestModalDynamicComponent } from './components/test-modal-dynamic/test-modal-dynamic.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryTypeDirective,
    EmployeeNewModalComponent,
    AlertSuccessComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    MyCurrencyPipe,
    ModalComponent,
    InputDirective,
    GetViewContainerDirective,
    TestDynamicComponentComponent,
    ModalDynamicComponent,
    ModalContentDirective,
    ModalTitleComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TestModalDynamicComponent,
  ],
  entryComponents:[
    TestDynamicComponentComponent,
    EmployeeListComponent,
    ModalDynamicComponent,
    TestModalDynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
