import { Component, OnInit } from "@angular/core";
import { GeneralTableService } from 'src/shared/sevices/general-table.service';

@Component({
    selector: 'tis',
    templateUrl: 'tis.html'
})
export class TisPage implements OnInit{

    private _data: Array<any>;
    private _ageSelectedString: string;
    private _ageSelectedNumber: number;

    constructor(private data: GeneralTableService){}

    ngOnInit(){
        this._data = this.data.generalData;
        this._ageSelectedString = '40';
        this._ageSelectedNumber = 40;
    }

    mainResearch(){
        this._data.forEach(x => {

            switch(x.age){
                case this._ageSelectedNumber:{
                    console.log('Warunek numeru spełniony dla ', x);
                    break;
                }
                case this._ageSelectedString:{
                    console.log('Warunek stringa spełniony dla ', x);
                    break;
                }
                default:
                    return null;
            }

        })

        let objResearch = this._data.find(x => x.name == 'Krzysztof');
        if(objResearch.age === this._ageSelectedNumber) {
            console.log('Znaleziona równoważność dla number (trzy znaki równości)');
        } else {
            console.log('Nieznaleziona równoważność dla number (trzy znaki równości)');
        }

        if(objResearch.age === this._ageSelectedNumber) {
            console.log('Znaleziona równoważność dla string (dwa znaki równości)');
        } else if (objResearch.age == this._ageSelectedString) {
            console.log('Nieznaleziona równoważność dla string (dwa znaki równości)');
        } 
    }
}