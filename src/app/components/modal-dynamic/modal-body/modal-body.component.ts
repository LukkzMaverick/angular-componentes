import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.css']
})
export class ModalBodyComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.firstChild.classList.add('modal-body')
  }

}
