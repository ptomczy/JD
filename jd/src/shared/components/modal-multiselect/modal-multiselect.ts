import { Component, Input, Output, Inject, EventEmitter, OnInit, OnChanges } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-multiselect',
    templateUrl: './modal-multiselect.html'
})
export class ModalMultiselect implements OnInit{
    @Input() listOfItems: any[];
    @Input() filteredItems: any[];
    @Input() filterKind: string;
    @Input() filteredAge: {min: number, max: number};
    selectedItems: Array<any> = [];
    private lSvalue: number;
    private rSvalue: number;
    rSvCorr: number;
    lSvCorr: number;
    min: number;
    max: number;
    ageResult: {min: number, max: number};
    scaleMin: number;
    scaleMax: number;
    scaleDiff: number;

    constructor(public modal: NgbActiveModal, public activeModal: NgbActiveModal){
    }

    ngOnInit(){
        this.listOfItems.sort();

        switch(this.filterKind){
            case 'age':{
                this.scaleMin = this.listOfItems[0];
                this.scaleMax = this.listOfItems[this.listOfItems.length -1];
                this.scaleDiff = this.scaleMax - this.scaleMin;
                if(this.filteredAge.min != null && this.filteredAge.max != null){
                    this.lSvalue = this.filteredAge.min;
                    this.rSvalue = this.filteredAge.max;
                } else {
                    this.lSvalue = this.scaleMin;
                    this.rSvalue = this.scaleMax;
                }
                this.valChange();
                break;
            }
            default:
                return null;
        }
    }

    dismiss(){
        this.activeModal.dismiss();
    }

    close(){
        switch(this.filterKind){
            case 'age': {
                this.activeModal.close(this.ageResult);
                break;
            }
            default:
                return this.activeModal.close(this.selectedItems);
        }
        
    }

    getElementChecked(el: any){
        return this.filteredItems.find(element => element == el);
    }

    clearFilter(){
        switch(this.filterKind){
            case 'age':{
                this.lSvalue = this.scaleMin;
                this.rSvalue = this.scaleMax;
                this.valChange();
            }
            default:
                this.selectedItems = [];
        }
        
        //this.selectedItems = [];
        
    }

    valChange(){
        let diff = Math.abs(this.rSvalue - this.lSvalue);
        let min = Math.min(this.lSvalue, this.rSvalue);
        this.min = min;
        this.max = diff + min;
        this.lSvCorr = (min - this.scaleMin) / this.scaleDiff * 100;
        this.rSvCorr = (diff / this.scaleDiff) * 100;
        this.ageResult = {min: this.min, max: this.max};
    }



}