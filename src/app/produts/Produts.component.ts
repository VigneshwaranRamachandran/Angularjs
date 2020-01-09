import { Component } from "@angular/core";

@Component({
    selector:'my-app',
    template:`Produts {{pName}} `
})
export class Produts{
    pName = " from Produts";
}