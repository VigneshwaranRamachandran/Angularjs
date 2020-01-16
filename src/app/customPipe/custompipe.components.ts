import { Component,Pipe,PipeTransform } from "@angular/core";


@Component({
selector:'customPipe',
templateUrl : './custompipeExample.html'
})
export class CustomPipeClass {
    originalValue = 10;
}
