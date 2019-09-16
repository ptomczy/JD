import { Component } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'providers',
    templateUrl: 'providers.html'
})
export class ProvidersPage {

    constructor(private http: HttpClientModule){

    }

    testMethod(){

    }
}