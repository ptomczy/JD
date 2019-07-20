import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[bar-over]'
})
export class BarOverDirective {
    @HostBinding('style.border-color') color: string;
    @HostListener('mouseenter') elementActivate() {
        this.color = 'red';
    }
    @HostListener('mouseleave') elementDeactivate() {
        this.color = 'light';
    }
}