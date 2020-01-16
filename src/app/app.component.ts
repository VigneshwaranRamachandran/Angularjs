import { Component } from '@angular/core';
import {ProductService} from './product/product.service'
import { IProduct  } from './product/product';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component ({
  selector: 'my-app',
  template: `
  <ul>
     <li><a href = "/Product">Product</a></li>
     <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
  </ul>
  <router-outlet></router-outlet>
  <formdata></formdata>
  <injuct></injuct> 
  <div>
   <input [(ngModel)] = "name" > {{name}}
   <div>
   <input [value] = "name1" (input) = "name1 = $event.target.value">
   {{name1}}
</div>
<button (click)=clicked()> clickhere </button>{{status}}
</div>
<div>
<customPipe></customPipe>
</div>
`,
  providers: [ProductService]
})

export   class   AppComponent  {
  iproducts: IProduct[];
  status = false;
  constructor(private _product: ProductService) {
  }
  clicked(){
    this.status = !this.status;
  }
  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }
}