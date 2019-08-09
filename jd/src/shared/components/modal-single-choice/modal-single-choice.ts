import { Component, Input, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'modal-single-choice',
    templateUrl: 'modal-single-choice.html'
})
export class ModalSingleChoice implements OnInit{
    listOfItems: Array<any>;
    selectedItem: string;

    constructor(public dialogRef: MatDialogRef<ModalSingleChoice>, @Inject(MAT_DIALOG_DATA) public data: Array<any>){}

    ngOnInit(){
        this.listOfItems = this.data;
    }

    onSelect(el: any){
        this.dialogRef.close(el);
    }

    onNoClick(){
        this.dialogRef.close('Nothing selected');
    }
}