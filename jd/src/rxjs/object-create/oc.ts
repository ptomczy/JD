import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, from, Subscription, of } from 'rxjs';

export interface IArray {
    idx: number,
    txt: string
}

const tmpArray: Array<IArray> = [
    {idx: 1, txt: "Number one"},
    {idx: 2, txt: "Number two"},
    {idx: 3, txt: "Number three"}
]
@Component({
    selector: 'rxjs-object-create',
    templateUrl: 'oc.html'
})
export class RxjsObjectCreateComponent implements OnInit, OnDestroy{
    private obj: Observable<any>;
    private prom: Promise<any>;
    private info: string = 'Oczekiwanie...';
    private mySubscription: Subscription = new Subscription;

    ngOnInit(){

    }

    createObservableByCreate(){
        this.obj = Observable.create(obs => {
            let info="Observable utworzony";
            obs.next(info);
            if(Math.random() > 0.5){
                obs.error(new Error("Sztuczny błąd, spełniony został warunek randomowy dla wartości > 0.5 (patrz kod)"));
            }
            obs.complete();
        });

        this.mySubscription.add(this.obj.subscribe(incoming => {
            this.info = incoming;
            setTimeout(() => {
                this.info = 'Oczekiwanie...';
            }, 2000);
        }));
    }

    createObservableFromPromise(){
        console.clear();
        this.prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Promise spełniony, z niego będzie observable");
            }, 1000);
        })

        let artificialObservable = from(this.prom);

        this.mySubscription.add(artificialObservable.subscribe(inf => {
            this.info = inf;
            setTimeout(() => {
                this.info = 'Oczekiwanie...';
            }, 2000);
        }));
    }

    createObservableByOf(){
        console.clear();
        this.obj = of(tmpArray);
        this.mySubscription.add(this.obj.subscribe(inc => {
            this.info = inc[1].txt;
            setTimeout(() => {
                this.info = 'Oczekiwanie...';
            }, 2000);
        }));
    }

    ngOnDestroy(){
        this.mySubscription.unsubscribe();
    }
}