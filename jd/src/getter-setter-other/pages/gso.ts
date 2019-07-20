import { Component, AfterViewInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LoadingProgress } from 'src/shared/components/loading-progress/loading-progress';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'gso',
    templateUrl: 'gso.html'
})
export class GSOPage {
    exampleItem: ExampleClass;

    constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
        this.exampleItem = new ExampleClass("Dupeczka");
        iconRegistry.addSvgIcon('done', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/done_icon.svg'));
    }

    fillIns(leftN: string, rightN: string): void {
        this.exampleItem.leftLeg = leftN;
        this.exampleItem.rightLeg = rightN;
    }

    openModal(): void {
        const dialogRef = this.dialog.open(LoadingProgress, {width: '300px', data: '0'});

        dialogRef.afterClosed().subscribe(() => {
            this.fillIns("Lewa sexinóżka", "Prawa sexinóżka")
        })
    }

    reset(){
        this.fillIns(null, null);
    }
}

export class ExampleClass {
    private _name: string;
    private _rightLeg: string;
    private _leftLeg: string;

    constructor(incomingName: string){
        this._name = incomingName;
    }

    get rightLeg(): string {
        return this._rightLeg;
    }

    get leftLeg(): string {
        return this._leftLeg;
    }

    get name(): string {
        return this._name;
    }

    set leftLeg(incVal: string) {
        this._leftLeg = incVal;
    }

    set rightLeg(incVal: string) {
        this._rightLeg = incVal;
    }
}