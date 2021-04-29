import { ModalComponent } from './modal.component';
import { Directive, ViewChild } from "@angular/core";

@Directive()
export class Modalable{
    @ViewChild(ModalComponent)
    modal: ModalComponent

    show(): void{
        this.modal.show()
      }
    
      hide(): void{
        this.modal.hide()
      }
}