import { Component } from "@angular/core";
import { ProvidersService } from '../services/providers.service';

@Component({
    selector: 'providers',
    templateUrl: 'providers.html'
})
export class ProvidersPage {

    constructor(private providersService: ProvidersService){

    }

    sendGetMethod(){
        let res = this.providersService.getInfo().subscribe(m => {
            
            console.log(m);
        });
    }
}