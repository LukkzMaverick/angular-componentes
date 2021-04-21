import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalaryTypeDirective } from './salary-type.directive';
import { EmployeeNewModalComponent } from './employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { EmployeeEditModalComponent } from './employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './my-currency.pipe'
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
    MyCurrencyPipe
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
