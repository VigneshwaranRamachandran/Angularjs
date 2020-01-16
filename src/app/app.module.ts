import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { Produts } from './produts/Produts.component';
import { Inventory } from './inventory/Inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './NotFound/PageNotFound';
import { FormDataClass } from './formData/formData.components'
import { FormsModule } from '@angular/forms';
import { InjectableService } from './injuctableExample/injuctable.service';
import { InjuctClass } from './injuctableExample/injuctable.components';
//import { Ng2PaginationModule } from 'ng2-pagination';
import { PaginationClass } from './paginationExample/pagination.components';
import { CustomPipeClass } from './customPipe/custompipe.components';
import { CustomPipe } from './customPipe/custompipeclass.pipe';
const appRoutes: Routes = [
  { path: 'Product', component: Produts },
  { path: 'Inventory', component: Inventory },
  { path: '**',component: PageNotFound}
];
//Ng2PaginationModule
@NgModule ({
   imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes),FormsModule],
   declarations: [ AppComponent,Produts,Inventory,PageNotFound,FormDataClass,InjuctClass,PaginationClass,CustomPipeClass,CustomPipe],
   bootstrap:    [ AppComponent ],
   providers : [InjectableService]
})
export class AppModule { }