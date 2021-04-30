import { ModalComponent } from './modal.component';
import { EventEmitter, Output } from '@angular/core';
import { Directive, OnInit, ViewChild } from "@angular/core";

@Directive()
export abstract class Modalable implements OnInit{
    @ViewChild(ModalComponent, {static: true})
    modal: ModalComponent

    @Output()
    onHide: EventEmitter<any> = new EventEmitter<any>()
  
    @Output()
    onShow: EventEmitter<any> = new EventEmitter<any>()

    ngOnInit(){
      this.subscribeToEvents()
    }

    private subscribeToEvents(): void{
      this.modal.onHide.subscribe((event) => {
        this.onHide.emit(event)
      })
      this.modal.onShow.subscribe((event) => {
        this.onShow.emit(event)
      })
    }

    show(): void{
        this.modal.show()
      }
    
      hide(): void{
        this.modal.hide()
      }
}