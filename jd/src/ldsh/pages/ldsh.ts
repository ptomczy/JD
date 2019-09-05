import { Component, OnInit } from "@angular/core";
import { DataSetService } from 'src/shared/sevices/data-set.service';
import * as _ from 'lodash';
import { CardsInfoService } from 'src/shared/sevices/cards-info.service';

@Component({
    selector: 'lodash-page',
    templateUrl: 'ldsh.html'
})
export class LodashPage implements OnInit {

    private exArrayNr: Array<number> = [];
    private exArrayString: Array<string> = [];

    private data: any;
    private cardsData: any;

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
                        //this.exArrayString.push(String.fromCharCode(_.random(97, 122)));
                        dir = -dir;
                        break;
                    }
                }
            }

            this.exArrayString.push(newInsertValue);

        })
    }


    ngOnInit(){
        //this.ldshTest();
        //this.groupElements();
        //this.sortElements();
        //this.countBy();
        //this.forEach();
        //this.every();
        //this.partition();
        //this.reduce();
        //this.size();
        //this.findArrayIndex();
        //this.arrays();
        this.join();


    }

    ldshTest(){
        let res = _.get(this.data[0], 'friends', 'Dla tego obiektu nie ma przyjaciół');
        console.log('Res ldshTest: ', res);
    }

    groupElements(){
        let groupByIsActiveFalse = _.groupBy(this.data, {isActive: false});        
        let groupByRandomNumber = _.sortBy(this.data[0].friends, (a) => {
            let issue = Math.random() * 100 * a;
            console.log('isziu: ', issue);
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





}