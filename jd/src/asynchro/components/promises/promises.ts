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
    private isTriggerButtonActive: boolean = true;

    constructor(private _snackBar: MatSnackBar){
    }

    ngOnInit(){
        this.timerValue = 5;
        this.timerInterval = null;
        this.startTimer();
    }

    startTimer(): void {

        this.timerInterval = setInterval(() => {
            this.timerValue--;
            if(this.timerValue < 1) {
                clearInterval(this.timerInterval);
                this.isTriggerButtonActive = false;
                this.openSnackBar("Niestey, za późno. Już nie kliniesz :-(", 3000);
            } else if ( this.signalGiven ) {
                clearInterval(this.timerInterval);
                this.isTriggerButtonActive = false;
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
        .finally(() => this.openSnackBar("Super, udało się!", 2000))
        
    }

    openSnackBar(info: string, duration: number){
        this._snackBar.open(info, null, {duration: duration});
    }

    pleaseAgain(){
        
        this.openSnackBar("Masz!", 2000);
        this.signalGiven = false;
        this.timerValue = 5;
        this.timerInterval = null;
        this.isTriggerButtonActive = true;
        this.startTimer();
    }

    ngOnDestroy(){
        clearInterval(this.timerInterval);
    }
}