import { EventEmitter, ViewChild } from '@angular/core';
import { ElementRef, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare const $;

//service - abrir o modal - modal generico e modal especifico
//
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit { 
  
  @Output()
  onHide: EventEmitter<any> = new EventEmitter<any>()

  @Output()
  onShow: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('modal', {static: true})
  private modal: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.addClasses()
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHide.emit(e)
    })
    $(this.divModal).on('shown.bs.modal', (e) => {
      this.onShow.emit(e)
    })
  }

  private addClasses(): void{
    this.divModal.querySelector('[modal-title]').classList.add('modal-title')
    this.divModal.querySelector('[modal-body]').classList.add('modal-body')
    this.divModal.querySelector('[modal-footer]').classList.add('modal-footer')
  }

  show(): void{
    $(this.divModal).modal('show')
  }

  hide(): void{
    $(this.divModal).modal('hide')
  }

  get divModal(){
    return this.modal.nativeElement
  }

}
