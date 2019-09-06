import { Component, OnInit } from "@angular/core";
import { DataSetService } from 'src/shared/sevices/data-set.service';
import * as _ from 'lodash';
import { CardsInfoService } from 'src/shared/sevices/cards-info.service';

const ldshIssues: Array<{item: string, method: string, desc: string}> = [
    {item: 'Grouping elements', method: 'groupElements()', desc: 'Two attempts to one issue: grouping by parameter (active: false), then grouping persons by radndom number (in fact using sort funcionality)'}, 
    {item: 'Sorting elements', method: 'sortElements()', desc: 'Used sorting by descending balance (using reverse method). The second approach regards sorting by two properties: firstly by "isActive" and then "balance". The last one sorts friend by their name ascending.' },
    {item: 'Using countBy', method: 'countBy()', desc: "Counts by the length of friend's name"},
    {item: 'Using forEach', method: 'forEach()', desc: 'Two kinds of using forEach: simple forEach and forEach with use of from right' },
    {item: 'Using every', method: 'every()', desc: 'Returns only those records where the name of the person is "Maria Gonzales"' },
    {item: 'Using partition', method: 'partition()', desc: 'Divides the set of data in two parts: for having "isActive" on false and on true'},
    {item: 'Using reduce', method: 'reduce()', desc: 'Summing index numbers' },
    {item: 'Using size', method: 'size()', desc: 'Information about size of data proceeded'},
    {item: 'Using findArrayIndex', method: 'findArrayIndex()', desc: 'Returns the index of Olivia Gordon'},
    {item: 'Using join', method: 'join()', desc: 'Joining all data from array with a specified separator'},
    {item: 'Using pull', method: 'pull()', desc: 'Removing specified values from array'},
    {item: 'Using unique', method: 'unique()', desc: 'Giving unique values from attached array'},
    {item: 'Using without', method: 'without()', desc: 'Original array deprived of value pointed out'}
];

@Component({
    selector: 'lodash-page',
    templateUrl: 'ldsh.html'
})
export class LodashPage implements OnInit {


    
    private exArrayNr: Array<number> = [];
    private exArrayString: Array<string> = [];

    private data: any;
    private cardsData: any;

    private elementsToChooseFrom: Array<{item: string, method: string, desc: string}>;
    private elementSelected: string = null;

    constructor(private sourceData: DataSetService, private cardInfoData: CardsInfoService){
        this.data = this.sourceData.fullData;
        this.cardsData = this.cardInfoData.cardsInfFull;

        _.forEach(this.data, () => {
            let rndVal = Math.floor(Math.random() * 100);
            this.exArrayNr.push(rndVal);
        });

        _.forEach(this.data, () => {
            let dir = 1;
            let lenghtOfInsert = _.random(5, 12);
            let newInsertValue: string = '';
            for(let i = 1; i < lenghtOfInsert; i++) {
                
                switch(dir){
                    case 1: {
                        newInsertValue = newInsertValue + String.fromCharCode(_.random(69, 90));
                        dir = -dir;
                        break;
                    }
                    case -1: {
                        newInsertValue = newInsertValue + String.fromCharCode(_.random(97, 122));
                        dir = -dir;
                        break;
                    }
                }
            }

            this.exArrayString.push(newInsertValue);
            this.elementsToChooseFrom = ldshIssues;

        })
    }

    ngOnInit(){
    }

    assignVal(arg: {item: string, method: string, desc: string}){
        this.elementSelected = arg.item;
        console.clear();
        eval('this.' + arg.method);
        
        // let myMethodString = 'this.' + arg.method;
        // console.log('myMethodString: ', myMethodString);

        // let fn = window[myMethodString];
        // console.log('fn: ', fn);
        // //fn.apply();

    }

    groupElements(){
        let groupByIsActiveFalse = _.groupBy(this.data, {isActive: false});        
        let groupByRandomNumber = _.sortBy(this.data[0].friends, (a) => {
            let issue = Math.random() * 100 * a;
            return issue;
        })

        console.log('Res - groupByRandomNumber: ', groupByRandomNumber);
    }

    sortElements(){
        let sortByDescendingBalance = _.sortBy(this.data, 'balance').reverse();
        let sortAscendingByTwoProperties = _.sortBy(this.data, ['isActive', 'balance']); //najpierw po isActive potem po balance, asc
        let sortAscendingFriendName = _.sortBy(this.data[0].friends, 'name');

        console.log('Res sortElementy: ', sortAscendingFriendName);
    }

    countBy(){
        let cntB = _.countBy(this.data[0].friends, (a) => {
            let len = a.name.length;
            return len;
        });
        console.log('Res: ', cntB);
    }

    forEach(){
        let res = _.forEach(this.data[0].friends, (f) => {
            console.log("the name of friend is ", f.name);
        });

        let resFromRight = _.forEachRight(this.data[0].friends, (f) => {
            console.log("the name of friend from right is", f.name);
        })
    }

    every(){
        let res = _.every(this.data[0].friends, (x) => {
            x.name == 'Maria Gonzales';
        });
        console.log('Res: ', res);
    }

    partition(){
        let res = _.partition(this.data, {'isActive': false});
        console.log('Only those who have isActive on false', res[0]);
    }

    reduce(){
        let res = _.reduce(this.data[0].friends, (base, f) => {
            return base + f.id;
        }, 0);
        console.log('Sum of index numbers: ', res);
    }

    size(){
        let res = _.size(this.data);
        console.log('Size of data is ', res);
    }

    arrays(){
        console.log(this.cardsData);
    }

    findArrayIndex(){
        let res = _.findIndex(this.cardsData, {'User name': 'Olivia Golden'});
        console.log('Index Olivii Golden to ', res);
    }

    join(){
        let res = _.join(this.exArrayNr, ' <dalej> ');
        console.log('Join wszystkich danych z separatorem: ', res);
    }

    pull(){
        let exampleArr = [1,2,3,4,5,6,7,8,9];
        let res = _.pull(exampleArr, 2,3,4);
        console.log('Pull z exArrayNr to: ', res);
    }

    unique(){
        let exampleArr = [1,4,3,2,5,4,1,2,3,67,5,4,3,4,5,6,1,2,4,3,2,5,4,3,2,3,4,2,4,6,3,4,2,3,4,2,3,1,3,2];
        let res = _.uniq(exampleArr);
        console.log('SortedUniqe: ', res);
    }

    without(){
        let exampleArr = [1,4,3,2,5,4,1,2,3,67,5,4,3,4,5,6,1,2,4,3,2,5,4,3,2,3,4,2,4,6,3,4,2,3,4,2,3,1,3,2];
        let res = _.without(exampleArr, 1);
        console.log('ExampleArr: ', res);
    }

}