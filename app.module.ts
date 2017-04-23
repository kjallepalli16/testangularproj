
import { NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser'
import {Subject} from 'rxjs/Subject';
import { AppComponent }  from './app.component';

import {ModalComponent} from './modal/modal.component';
import { ModalService } from './modal/modal-service';
import { ModalBodyComponent } from "./modal/modal-body.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent  } from './NgbdModalComponent';
import { NgbdModalContent } from './NgbdModalContent';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot()],
  declarations: [ AppComponent,ModalComponent,ModalBodyComponent,NgbdModalComponent,NgbdModalContent ],
  providers : [ModalService],
  entryComponents : [NgbdModalContent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
