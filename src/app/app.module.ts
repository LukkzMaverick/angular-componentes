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
