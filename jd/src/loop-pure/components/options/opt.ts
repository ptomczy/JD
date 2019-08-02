import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'optns',
    templateUrl: 'opt.html'
})
export class OptComponent {
    @Input() singleColumnListToChoose: any[];
    @Output() singleElementChosen: EventEmitter<any> = new EventEmitter<any>();

    selChange(event: any){
        this.singleElementChosen.emit(event);
    }
}