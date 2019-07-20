import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[mouse-over-object-color-change]'
})
export class MOOCCDirective {
    @HostBinding('style.border-color') color: string;
    @HostListener('mouseenter') over(){
         this.color = 'green';
    };
    @HostListener('mouseleave') mouseOff(){
        this.color = 'whitesmoke';
    }
}