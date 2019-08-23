import { Component, Inject } from "@angular/core";
import { DIExtraPage, Dom, DOM_TOKEN } from './di-extra';
import { IforHumanBuilding } from '../models/di-model';

@Component({
    selector: 'dzi-imp',
    templateUrl: 'di.html'
})
export class DIPage extends DIExtraPage implements IforHumanBuilding {

    hasToilet: boolean;
    private infoValue: any = '';

    constructor(@Inject(DOM_TOKEN) dm: Dom, @Inject('SraczToken') sracz: boolean){
        super(dm);
        this.hasToilet = sracz;
    }

    createNewObject(): void {
        let nObj = new DIPage(null, true);
        console.log("obj: ", nObj);
        this.infoValue =  this.hasToilet;
    }

}