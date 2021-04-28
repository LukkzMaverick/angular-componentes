import { ElementRef } from '@angular/core';
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
