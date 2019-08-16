import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'async-await',
    templateUrl: 'aa.html'
})
export class AsyncAwaitComponent implements OnInit {

    private info;

    constructor(private _snackBar: MatSnackBar){
    }

    ngOnInit(){
        this.info = "";
    }

    bubasAsyncFunction(){
        return new Promise((resolve, reject) => {
            const timeForResolve: number = Math.random() * 10000;
            const timeForReject: number = Math.random() * 10000;

        setTimeout(() => {
            resolve("Udało się");
        }, timeForResolve);

        setTimeout(() => {
            reject("Niestety się nie udało");
        }, timeForReject);
    })
    }

    testFunc(){
        this.bubasAsyncFunction()
        .then(res => this.info = res)
        .catch(err => this.info = err);
    }

    async testFuncAsync(){
        try {
            const d = await this.bubasAsyncFunction();
            this.info = d;
        } catch(err) {
            this.info = err;
        }
    }

    async runTestFunc(){
        await this.testFuncAsync();
        this._snackBar.open(this.info, null, {duration: 1500});

    }

}