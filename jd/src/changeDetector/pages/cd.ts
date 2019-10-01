import { Component } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'changeDetector',
    templateUrl: 'cd.html'
})
export class CDPage {

    private myData = ['Chłopiec', 'Dziewczynka', 'Obojnak'];
    private myOtherData = ['Piesek', 'Kotek', 'Świnka'];
    private myExtraData = new BehaviorSubject(['Drzewko', 'Kwiatek', 'Krzaczek']);

    upgradeByPush(element: string){
        //this.myData.push(element); // nie działa jak ustawione detection strategy OnPush
        this.myOtherData = [...this.myData, element];
        //this.myExtraData.next([element]);
    }

}