import { Component, OnDestroy, OnInit } from "@angular/core";
import { timer, combineLatest, from, interval, of, Observable, throwError } from 'rxjs';
import { map, switchMap, flatMap, tap, delay, timeInterval, concatMap, catchError } from 'rxjs/operators';

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

        let source = from(tapBase);

        let tmpCounter: number = 300;

        source.pipe(
            concatMap(x => of(x).pipe(
                tap(() => {
                    tmpCounter = this.increaseCounter(tmpCounter,  100);
                    console.log(tmpCounter);
                }),
                delay(tmpCounter))),
            tap(el => this.handlePersonForTap(el)),
            concatMap(x => of(x).pipe(
                tap(() => {
                    tmpCounter = this.increaseCounter(tmpCounter, 50);
                    console.log(tmpCounter);
                }),
                delay(tmpCounter))),
            tap(prsn => this.setupTextToDisplay('Pełna nazwa to: ' + prsn)),
            concatMap(x => of(x).pipe(
                tap(() => {
                    tmpCounter = this.increaseCounter(tmpCounter, 300);
                    console.log(tmpCounter);
                }),
                delay(tmpCounter))),
            tap(() => this.setupTextToDisplay('Koniec elementu')),
        ).subscribe();
    }

    increaseCounter(counterValue: number, howMuch: number): number {
       return counterValue = counterValue + howMuch;
    }

    handlePersonForTap(psn: string) {
        let m: Observable<any>;
        m = Observable.create(observer => {
                observer.next(psn);
        })
        m.subscribe(x => {return this.setupTextToDisplay('Trzy pierwsze litery to: ' + x.slice(0, 3))});
    }

    setupTextToDisplay(input: string) {
            if(this.tapTextToDisplay == null){
                this.tapTextToDisplay = input + '\n';
            } else {
                this.tapTextToDisplay = input + '\n' +  this.tapTextToDisplay;
            }
    }

    exampleforCatchError(){
        let observableForError = from(tapBase);

        observableForError.pipe(
            map(x => {
                if(x.slice(0, 1) === "R"){
                    throw new Error('Natrafiono na element zaczynający się od R. To ' + x);
                }
                return x;
            }),
            catchError(e => {
                console.error(e.message);
                console.log('Obsługiwany błąd');
                return throwError('Error z catchError');
            })
        ).subscribe(val => {
            console.log('W subscribe: ', val),
            e => console.error(e);
            () => console.log("Koniec");
        })
    }

    ngOnDestroy(){
    }
}