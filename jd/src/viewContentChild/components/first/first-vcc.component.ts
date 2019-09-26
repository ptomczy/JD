import { Component, Input, ContentChild, ElementRef } from "@angular/core";

@Component({
    selector: 'vcc-one',
    templateUrl: 'first-vcc.component.html'
})
export class FirstVCCComponent {

    @Input() inputValueOnFirstVCCComponent: string;
    @ContentChild('insideContent', {static: false}) insCont: ElementRef;

    ngAfterContentInit(){
        console.log("The result of insideContent is: ", this.insCont.nativeElement.innerHTML);
    }
}