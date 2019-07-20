import { Component, Inject, OnInit, AfterViewInit, AfterViewChecked, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDBData } from './loading-progress.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'loading-progress',
    templateUrl: './loading-progress.html',
    styles: ['./loading-progress.scss']
})

export class LoadingProgress implements AfterViewInit {
    progressBarValue: number;
    @Output() loadingProgressClosed = new EventEmitter<boolean>();

    constructor(public dialogRef: MatDialogRef<LoadingProgress>, @Inject(MAT_DIALOG_DATA) public data: IDBData)
    {}

    ngAfterViewInit(){

        let counter: number = -20;

        let m = Observable.create(obs => {
            setInterval(() => {
                obs.next(counter);
                counter += 2;
            },50)
        })

        m.subscribe(x => {
            this.progressBarValue = x;
            if(x == 108){
                this.closeModal();
            }
        });

    }

    closeModal(){
        this.dialogRef.close();
    }

}