import { Component, OnDestroy, OnInit } from "@angular/core";
import { timer, combineLatest, from } from 'rxjs';
import { map, switchMap, flatMap } from 'rxjs/operators';

const t1$ = timer(1, 500);
const t2$ = timer(1, 700);
const t3$ = timer(1, 800);
const t4$ = timer(1, 100);

const cars = [
    {producer: 'Mercedes', models: ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'G-Klasse']},
    {producer: 'BMW', models: ['1-er', '2-er', '3-er', '4-er', '5-er', '6-er', '7-er', '8-er']},
    {producer: 'Opel', models: ['Adam', 'Karl', 'Corsa', 'Meriva', 'Astra', 'Insignia', 'Mokka', 'Grandland', 'Crossland']}
];

@Component({
    selector: 'rxjs-operators',
    templateUrl: 'operators.html'
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy{

    private res: {r1: number | string, r2: number | string, r3: number | string};
    private infoMap: string | number;
    private infoSwitchMap: string | number;
    private infoFlatMap: Array<string>;


    ngOnInit(){
        this.res = {r1:'...', r2: '...', r3: '...'};
    }

    exampleForCombinateLatest(){
        combineLatest(t1$, t2$, t3$).subscribe(([a, b, c]) => {
            this.res = {r1: a, r2: b, r3: c};
        })
    }

    exampleForMap(){
        let obs = t1$.pipe(map(el => {
            if(el%3 == 2) {
                this.infoMap = el + ' - wynik zmodyfikowany mapem ';
            } else {
                this.infoMap = 'Wynik zmodyfikowany mapem: ' + el;
            }
            
        }));

        obs.subscribe();
    }

    exampleForSwitchMap(){
        t1$.pipe(switchMap(ev => t4$)).subscribe(res => this.infoSwitchMap = res);
    }

    exampleForFlatMap(){
        this.infoFlatMap = [];
        let carObservable = from(cars);
        carObservable.pipe(flatMap(model => model.models)).subscribe(x => this.infoFlatMap.push(x));//bo zwracana wartość jest observablem.
    }

    ngOnDestroy(){
    }
}