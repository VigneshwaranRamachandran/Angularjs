import { Component } from "@angular/core";

@Component({
    selector:'formdata',
    templateUrl:'./formData.html'
})
export class FormDataClass{
model = new FormDataModule(1,"vigneshwaran");
}
export class FormDataModule{
    constructor(public id:number,public name:string){}
}