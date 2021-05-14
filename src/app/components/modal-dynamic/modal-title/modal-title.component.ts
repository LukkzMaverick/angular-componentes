import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.css']
})
export class ModalTitleComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const modalTitle = this.element.nativeElement.firstChild.firstChild
    modalTitle.classList.add('modal-title')
  }

}
