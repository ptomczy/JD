import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'immut',
    templateUrl: 'immut.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImmutPage{
    constructor(){
        console.log('CDS ', ChangeDetectionStrategy);
    }
}