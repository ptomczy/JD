import { Component } from "@angular/core";
import { DIExtraPage } from './di-extra';
import { IforHumanBuilding } from '../models/di-model';

@Component({
    selector: 'dzi-imp',
    templateUrl: 'di.html'
})
export class DIPage extends DIExtraPage implements IforHumanBuilding {

    hasToilet;
    private infoValue: any = '';

    // constructor(name: string){
    //     super(name);
    // }

    createNewObject(): void {
        //let newO = new DIExtraPage('Psia buda');
        //this.infoValue = 'Utworzono: ', newO;
    }

}