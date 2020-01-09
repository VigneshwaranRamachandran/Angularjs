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
  <router-outlet></router-outlet>`,
  providers: [ProductService]
})

export   class   AppComponent  {
  iproducts: IProduct[];
  constructor(private _product: ProductService) {
  }
  
  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }
}