import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'promises-component',
    templateUrl: 'promises.html'
})
export class PromisesComponent implements OnInit {
    private signalGiven: boolean = false;
    private timerValue: number;
    private timerInterval: any;

    constructor(private _snackBar: MatSnackBar){
    }

    ngOnInit(){
        this.timerValue = 5;
        this.timerInterval = null;
        this.startTimer();
    }

    startTimer(): void {




        this.timerInterval = setInterval(() => {
            console.log(this.timerValue);
            this.timerValue--;
            if(this.signalGiven || this.timerValue < 0) {
                clearInterval(this.timerInterval);
            }
        }, 500);
    }

    buttonClicked(){
        this.signalGiven = true;

        let myPromise = Promise.resolve(() => 
            clearInterval(this.timerInterval)
        );

        myPromise
        .then(() => console.log("Button clicked, interval cleared"))
        .catch(err => console.log('Jest wykonywany .catch promisa z wartością: ', err))
        .finally(() => this.openSnackBar())
        
    }

    openSnackBar(){
        this._snackBar.open('Rewelacja, udało się', null, {duration: 2000});
    }

    ngOnDestroy(){
        clearInterval(this.timerInterval);
    }
}