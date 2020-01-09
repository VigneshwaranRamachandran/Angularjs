import { Component } from "@angular/core";
import { Router }  from '@angular/router';  

@Component({
    selector :'my-app',
    template : `Inventory {{inName}} <br>
    <a (click) = onBack()>back </a>
    `,
})
export class Inventory{
    inName = " from-inventory ";
constructor(private router : Router){}
    onBack = ()=>{
this.router.navigate(['/']);
    }
}