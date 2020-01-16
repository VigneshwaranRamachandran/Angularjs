import { Injectable } from "@angular/core";

@Injectable()
export class InjectableService {
    getValue() {
        return  " helo from service "; 
    }
}