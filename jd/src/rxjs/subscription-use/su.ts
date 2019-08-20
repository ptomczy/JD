import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'rxjs-subscription-use',
    templateUrl: 'su.html'
})
export class RxjsSubscriptionComponent implements OnInit, OnDestroy{
    private subsc: Subscription = new Subscription();
    private interval;
    private reportingValue: string;

    ngOnInit(){
        let nr: number = 0;

        let myObservable = Observable.create(obs => {
            this.interval = setInterval(() => {
                nr++;
                this.reportingValue = nr.toString();
                obs.next(this.reportingValue);
                if(nr == 15) {
                    this.stopInterval();
                    obs.complete(this.reportingValue = 'Koniec');
                }
            }, 200)
        })

        this.subsc.add(myObservable.subscribe())
        
    }

    buttonClicked(){
        this.ngOnInit();
    }

    stopInterval(){
        clearInterval(this.interval);
    }

    ngOnDestroy(){
        this.subsc.unsubscribe();
    }
}