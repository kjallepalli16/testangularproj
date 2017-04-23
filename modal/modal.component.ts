import {  ComponentRef, Component,ViewContainerRef, Injector,ViewChild, ComponentFactoryResolver} from '@angular/core';
import {ModalService} from './modal-service';

declare var $: any;
@Component({
    selector:'modal-component',
    templateUrl : './modal.component.html'
})

export class ModalComponent{
  @ViewChild('theBody', {read: ViewContainerRef}) theBody;
  
  cmpRef:ComponentRef<any>;
  
  constructor(       
    modalService:ModalService, 
    private componentFactoryResolver: ComponentFactoryResolver, 
    injector: Injector) {
     
      console.log("Modal component intilaised....");
      
      modalService.ShowModal.subscribe(type => {
      if(this.cmpRef) {
        this.cmpRef.destroy();
      }
      let factory = this.componentFactoryResolver.resolveComponentFactory(type);
      this.cmpRef = this.theBody.createComponent(factory)
      $('#theModal').modal('show');
    });
  }

  close() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
    this.cmpRef = null;
  }
}