import {Injectable} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ModalService{
    constructor(){
        console.log("Modal service intilaised.....");
    }
    
ShowModal : Subject<any> = new Subject();
    
}