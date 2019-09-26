import { Component, Input } from "@angular/core";

@Component({
    selector: 'vcc-second',
    templateUrl: 'second-vcc.component.html'
})
export class SecondVCCComponent {
    @Input() inputVariable: string;
}