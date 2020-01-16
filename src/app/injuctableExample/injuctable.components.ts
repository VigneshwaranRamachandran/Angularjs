import { Component } from "@angular/core";
import { InjectableService } from "./injuctable.service";
@Component({
    selector:'injuct',
    templateUrl:'./injuctable.html'
})
export class InjuctClass{
    value="";
    constructor(public injuctservice : InjectableService){  }
    ngOnInit(): void { 
        this.value = this.injuctservice.getValue(); 
     } 
}