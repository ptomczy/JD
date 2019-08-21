import { Component, OnDestroy, OnInit } from "@angular/core";
import { timer, combineLatest, from, interval, of, Observable } from 'rxjs';
import { map, switchMap, flatMap, tap, delay, timeInterval, concatMap } from 'rxjs/operators';

const t1$ = timer(1, 500);
const t2$ = timer(1, 700);
const t3$ = timer(1, 800);
const t4$ = timer(1, 100);

const cars = [
    {producer: 'Mercedes', models: ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'G-Klasse']},
    {producer: 'BMW', models: ['1-er', '2-er', '3-er', '4-er', '5-er', '6-er', '7-er', '8-er']},
    {producer: 'Opel', models: ['Adam', 'Karl', 'Corsa', 'Meriva', 'Astra', 'Insignia', 'Mokka', 'Grandland', 'Crossland']}
];

const tapBase: Array<string> = ['Krzychu', 'Grzesiek', 'Michał', 'Alek', 'Rafał', 'Jarek'];

@Component({
    selector: 'rxjs-operators',
    templateUrl: 'operators.html'
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy{

    private res: {r1: number | string, r2: number | string, r3: number | string};
    private infoMap: string | number;
    private infoSwitchMap: string | number;
    private infoFlatMap: Array<string>;
    private tapTextToDisplay: string;


    ngOnInit(){
        this.res = {r1:'...', r2: '...', r3: '...'};
        this.tapTextToDisplay = null;
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

    exampleForTap(){

        // let source = of(tapBase).pipe(delay(3000));

        // let personObservable = Observable.create(async observer => {
        //     for (let index = 0; index < tapBase.length; index++) {
        //         observer.next(tapBase[index]);
        //         await new Promise(res => {
        //             setTimeout(() => {
        //                 res();
        //             }, 3000);
        //         });
        //     }
        // }) as Observable<string>;

        let source = from(tapBase);

        // source.pipe(
        //     //delay(1000),
        //     // concatMap(el => of(el).pipe(
        //     //     delay(1000),
        //     //     tap(e => console.log('Pierwszy: ', e))
        //     //     )),

        //     tap(prsn => {
        //         this.handlePersonForTap(prsn)
        //     }),
        //     //delay(1000),
        //     // concatMap(el => of(el).pipe(
        //     //     delay(1000),
        //     //     tap(e => console.log('Drugi: ', e))
        //     //     )),

        //     map(async p => {
        //         this.setupTextToDisplay('Pełna nazwa to: ' + p);
        //     }),
        //     //delay(1000),
        //     // concatMap(el => of(el).pipe(
        //     //     delay(1000),
        //     //     tap(e => console.log('Trzeci: ', e))
        //     //     )),
        //     tap(() => this.setupTextToDisplay('Koniec dla elementu'))   
        // ).subscribe();

        source.pipe(
            //delay(1000),
            tap(async el => await this.handlePersonForTap(el)),
            // delay(1000),
            // tap(m => this.handlePersonForTap(m)),
            // delay(1000),
            //tap(() => console.log('Koniec'))
        ).subscribe();
    }

    handlePersonForTap(psn: string) {
        let m: Observable<any>;
        m = Observable.create(observer => {
            setTimeout(() => {
                observer.next(psn);
            }, 400);
            
        })
        //return this.setupTextToDisplay('Trzy pierwsze litery to: ' + psn.slice(0, 3));
        m.subscribe(x => {return this.setupTextToDisplay('Trzy pierwsze litery to: ' + x.slice(0, 3))});
    }

    setupTextToDisplay(input: string) {
        // setTimeout(() => {
            if(this.tapTextToDisplay == null){
                this.tapTextToDisplay = input + '\n';
            } else {
                this.tapTextToDisplay = input + '\n' +  this.tapTextToDisplay;
            }
        // }, 400)


    }

    ngOnDestroy(){
    }
}