import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList, OnInit } from "@angular/core";
import { FirstVCCComponent } from '../components/first/first-vcc.component';
import { SecondVCCComponent } from '../components/second/second-vcc.component';

@Component({
    selector: 'vcc-page',
    templateUrl: 'vcc.html'
})
export class VCCPage implements OnInit, AfterViewInit{

    @ViewChild(FirstVCCComponent, {static: false}) fromFirstVCCComponent: FirstVCCComponent;
    @ViewChild('myRef', {static: false}) myRef: ElementRef;

    @ViewChildren(SecondVCCComponent) seconds: QueryList<any>;
    private viewChildrenInfo: string;
    private ngContentInfo: string;

    private elements: Array<string> = ['User', 'Store', 'Division'];

    ngOnInit(){
        this.viewChildrenInfo = "There are three items in an array as a source for viewChildren. "
         + "Angular builds as many Second VCC Components as the length of that array. For each one there is appropriate value attached";
         this.ngContentInfo = "Example to point out the usage of ng-content and ContentChild";
    }

    ngAfterViewInit(){
        console.log("Oto tekst z viuczajlda: ", this.fromFirstVCCComponent.inputValueOnFirstVCCComponent);        
    }

    changeRef(){
        this.myRef.nativeElement.innerHTML = 'Paragraph changed';
        this.seconds.forEach(x => {console.log('Zwracam z drugiego ', x)});
    }


}