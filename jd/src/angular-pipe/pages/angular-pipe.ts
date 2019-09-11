import { Component, OnInit, OnDestroy} from "@angular/core";
import * as moment from 'moment';

export enum pType {
    string = 'string', 
    number = 'number',
    JSONObject = 'JSONObject',
    dictionary = 'dict'
};

const exJSON: any = {
    name: 'Jasiu',
    age: 12, 
    sex: 'boy'
}

const dict: any = {
    'mianownik': 'kto?, co?',
    'dopełniacz': 'kogo?, czego?',
    'celownik': 'komu?, czemu?',
    'biernik': 'kogo?,  co?',
    'narzędnik': 'z kim?, z czym?',
    'miejscownik': 'o kim?, o czym?'
}
    
const myElements: Array<{name: string, pipeType: pType, valToChange: string | number, param: string | number, desc: string}> = [
    {name: 'MultiplyByTen', pipeType: pType.number, valToChange: 10, param: 10, desc: 'Given argument multiplied by ten by the action of pipe'},
    {name: 'MultiplyByTwenty', pipeType: pType.number, valToChange: 10, param: 20, desc: 'Given argument multiplied by twenty by the action of pipe'},
    {name: 'Convert to JSON', pipeType: pType.JSONObject, valToChange: exJSON, param: '', desc: 'Delivered const converted onto JSON format data'},
    {name: 'Dictionary', pipeType: pType.dictionary, valToChange: 'dopełniacz', param: '', desc: 'Displaying appropriate set of questions per selected grammatical case '}
]

@Component({
    selector: 'angular-pipe',
    templateUrl: 'angular-pipe.html'
})
export class AngularPipePage implements OnInit, OnDestroy{

    private panelOpenState: boolean;
    private myElements = myElements;
    private now;
    private intrvl;
    private dict;

    constructor(){
        this.intrvl = setInterval(() => {
            this.now = moment();
        }, 10);
    }

    ngOnInit(){
        this.panelOpenState = false;
        this.dict = dict;
        
    }

    ngOnDestroy(){
        clearInterval(this.intrvl);
    }

}