import { Component,ViewChild,NgModule } from '@angular/core';
import { ModalService } from "./modal/modal-service";
import { ModalBodyComponent } from "./modal/modal-body.component";

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  template: `<button (click)="showBtnClick()">show Dialog</button>
             <template ngbModalContainer></template>
             <ngbd-modal-component></ngbd-modal-component>
             `,
})

export class AppComponent  { 
 
  constructor(private modalService : ModalService){
    
  }
 
  name = 'Angular'; 

  showBtnClick(){
    //this.modalService.ShowModal.next(ModalBodyComponent);
    alert("button click called");
  }
}
