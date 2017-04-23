import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from './NgbdModalContent';

@Component({
  selector: 'ngbd-modal-component',
  template: `<button type="button" class="btn btn-secondary"(click)="TestModal()">Test</button>`
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  TestModal(){
      const modalRef = this.modalService.open(NgbdModalContent);
  }
  ngOnInit() {
    
  }
}