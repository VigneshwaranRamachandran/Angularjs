import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { Produts } from './produts/Produts.component';
import { Inventory } from './inventory/Inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './NotFound/PageNotFound';

const appRoutes: Routes = [
  { path: 'Product', component: Produts },
  { path: 'Inventory', component: Inventory },
  { path: '**',component: PageNotFound}
];

@NgModule ({
   imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Produts,Inventory,PageNotFound],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }