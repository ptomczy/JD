import { Component, OnInit, OnDestroy, AfterViewChecked, AfterContentChecked, OnChanges, DoCheck} from "@angular/core";
import * as moment from 'moment';

export enum pType {
    string = 'string', 
    number = 'number',
    JSONObject = 'JSONObject',
    dictionary = 'dict',
    percentage = 'percentage',
    krypto = 'krypto'
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
    


@Component({
    selector: 'angular-pipe',
    templateUrl: 'angular-pipe.html'
})
export class AngularPipePage implements OnInit, OnDestroy{

    private panelOpenState: boolean;
    private myElements: Array<{name: string, pipeType: pType, valToChange: string | number, param: string | number, desc: string}>;
    private now;
    private intrvl;
    private dict;
    private dictKeys: Array<string> = [];
    private selectedGrammaticalCase: string;

    constructor(){
        this.intrvl = setInterval(() => {
            this.now = moment();
        }, 10);
    }

    ngOnInit(){
        this.panelOpenState = false;
        this.dict = dict;
        
        for(let i in dict) {
            this.dictKeys.push(i);
        }

        this.selectedGrammaticalCase = '';
        this.myElements = [
            {name: 'MultiplyByTen', pipeType: pType.number, valToChange: 10, param: 10, desc: 'Given argument multiplied by ten by the action of pipe'},
            {name: 'MultiplyByTwenty', pipeType: pType.number, valToChange: 10, param: 20, desc: 'Given argument multiplied by twenty by the action of pipe'},
            {name: 'Convert to JSON', pipeType: pType.JSONObject, valToChange: exJSON, param: '', desc: 'Delivered const converted onto JSON format data'},
            {name: 'Dictionary', pipeType: pType.dictionary, valToChange: null, param: '', desc: 'Displaying appropriate set of questions per selected grammatical case '},
            {name: 'Percentage', pipeType: pType.percentage, valToChange: 0.54, param: null, desc: 'Given argument presented as percentage'},
            {name: 'Own kryptography', pipeType: pType.krypto, valToChange: 'TESTowe', param: '', desc: 'Applied hidden code: each character replaced by another one in line with a secret algorithm'}
        ];
    }

    updateMyElementsForDictionary(el: string){
        this.selectedGrammaticalCase = el;
    }

    ngOnDestroy(){
        clearInterval(this.intrvl);
    }

}