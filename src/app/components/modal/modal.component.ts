import { ElementRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {  

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.addClasses()
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

  private get divModal() : HTMLElement{
    const nativeElement:HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement
  }

}
