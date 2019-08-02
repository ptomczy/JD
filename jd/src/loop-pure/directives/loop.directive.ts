import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[loopWhileActivator]'
})
export class LoopWhileDirective {

    @Output() triggerValue: EventEmitter<any> = new EventEmitter<any>();

    @HostListener('mouseenter') releaseCountUpTrigger(): void {
        this.triggerValue.emit(true);        
    }

    @HostListener('mouseleave') stopCountUpTrigger(): void {
        this.triggerValue.emit(false);        
    }
}