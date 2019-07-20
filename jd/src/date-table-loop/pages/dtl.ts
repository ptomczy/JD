import { Component } from "@angular/core";
import { ITimeItem } from '../models/time-item';

const plannedTestedItems: Array<{parameter: string, comment: string}> = [
    {parameter: 'getFullYear', comment: 'Daje tylko rok z new Date()'},
    {parameter: 'getMonth', comment: 'Daje tylko miesiąc z new Date()'},
    {parameter: 'getDate', comment: 'Daje tylko dzień z new Date()'},
    {parameter: 'getDay', comment: 'Daje dzień tygodnia z new Date()'},
    {parameter: 'getHours', comment: 'Daje godzinę z new Date()'},
    {parameter: 'getMinutes', comment: 'Daje minuty z new Date()'},
    {parameter: 'getSeconds', comment: 'Daje sekundy z new Date()'},
    {parameter: 'getTime', comment: 'Daje epoch Time'}
]

@Component({
    selector: 'dtl',
    templateUrl: 'dtl.html'
})
export class DTLPage {
    currDate: Date;
    timeData: Array<ITimeItem>;

    constructor(){
        this.currDate = new Date();
        this.timeData = [];
    }

    formattingDate(){

        if(this.timeData) {
            this.timeData = [];
        }

        let completeSetOfTimeData = new Promise((resolve) => {
            for(let itm in plannedTestedItems){
                let fn_name = plannedTestedItems[itm];
                let fn: Function = eval("this.currDate." + fn_name.parameter + '()');
                resolve(this.timeData.push(
                    {parameter: fn_name.parameter, value: fn.toString(), comment: fn_name.comment}
                    ));
            }
        })
        completeSetOfTimeData.then();
    }
}