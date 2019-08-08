import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'tooltip',
    template: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}
    `,
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    @Input() config;
    @Input() counter;

    get runChangeDetection() {
        console.log('Change detector action');
        return true;
    }
}

@Component({
    selector: 'tst2',
    template: `
    <tooltip [config]="config"></tooltip>
    <button (click)="onClick('property')">Change on property</button>
    <button (click)="onClick('object')">Change on object</button>
    <button (click)="onClick('counterChange')">Change counter value</button>
    `
})
export class Tst2Component {
    config = {
        position: 'top'
    };
    counter: number = 0;

    onClick(arg: string) {
        switch(arg){
            case 'property':{
                this.config.position = 'bottom';
                break;
            }
            case 'object':{
                this.config = {position: 'bottom'};
                break;
            }
            case 'counterChange':{
                this.changeCounter();
                break;
            }
        }
        
    }

    changeCounter(){
        //this.counter++;
        this.counter = this.counter++;
    }
}