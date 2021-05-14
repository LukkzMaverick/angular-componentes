import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.css']
})
export class ModalFooterComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.firstChild.classList.add('modal-footer')
  }

}
