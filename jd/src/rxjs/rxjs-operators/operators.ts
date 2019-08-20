import { Component, OnDestroy, OnInit } from "@angular/core";
import { timer, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const t1$ = timer(1, 500);
const t2$ = timer(1, 700);
const t3$ = timer(1, 800);
const t4$ = timer(1, 100);

@Component({
    selector: 'rxjs-operators',
    templateUrl: 'operators.html'
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy{

    private res: {r1: number | string, r2: number | string, r3: number | string};
    private infoMap: string | number;
    private infoSwitchMap: string | number;


    ngOnInit(){
        this.res = {r1:'...', r2: '...', r3: '...'}
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

    ngOnDestroy(){
    }
}