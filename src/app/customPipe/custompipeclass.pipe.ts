import { Component,Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name : 'add2'
})
export class CustomPipe implements PipeTransform {
   
transform(vaue:number){
    return vaue+2;
}
}