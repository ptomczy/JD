import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
    selector: 'cd_one_component',
    templateUrl: 'cd_one.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDOneComponent implements OnInit{
    @Input() incomingData: string[];
    @Input() incomingExtraData: Observable<string[]>;
    private extraData: string[] = [];


    constructor(private cd: ChangeDetectorRef){
        
    }

    ngOnInit(){
        // this.incomingExtraData.subscribe(val => {
        //     this.extraData = val;
        //     this.cd.markForCheck();
        // })
    }

    refresh(){
        this.cd.detectChanges(); // dla wymuszenia
    }
}