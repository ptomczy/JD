import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ModalSingleChoice } from 'src/shared/components/modal-single-choice/modal-single-choice';

const CD_KINDS: Array<{name: string, command: string, note: string}> = [
    {name: 'Detect changes', command: 'detectChanges', note: 'Detektor uruchomiony ręcznie na bieżącym komponencie i jego ewentualnych dzieciach'},
    {name: 'Detach', command: 'detach', note: 'Bieżący komponent odczepiony od drzewa detektora. Razem z nim jego dzieci ewentualne'},
    {name: 'Reattach', command: 'reattach', note: 'Bieżący komponent ponownie doczepiony do drzewa detektora po odczepieniu. Jego dzieci też'},
    {name: 'Mark for check', command: 'markForCheck', note: 'Nie uruchamia CD, ale oznacza wszystkie elementy z onPush do ponownego sprawdzenia w tym lub następnym cyklu'},
    {name: 'Check no changes', command: 'checkNoChanges', note: 'Służy do sprawdzania czy change detection nie wprowadza żadnych zmian. Sprawdzenie na komponencie i jego dzieciach'}
]

@Component({
    selector: 'internal',
    template: `
    <h4>Config value: position-{{config.position}}</h4>
    <p>Is change detection run? {{runChangeDetection}}</p>
    <button class="mat-raised-button" (click)="chOnWish()" style="margin-bottom: 5px">Change detector trigger</button>
    <p>Counter value: {{counter}}</p>
    <button class="mat-raised-button" style="margin-right: 15px" (click)="changeCounter()" matBadge="c" matBadgePosition="after" >Change counter value</button>
    `,
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternalComponent {
    @Input() config;
    @Output() info: EventEmitter<string> = new EventEmitter<string>();
    private counter: number = 0;
    


    constructor(private chDetRef: ChangeDetectorRef, private choiceModal: MatDialog){}

    get runChangeDetection() {
        console.log('Change detector action');
        return true;
    }

    changeCounter(){
        this.counter++;
        let tmpCnt = this.counter;
        this.counter = tmpCnt;
        console.log('Result on counter: ', this.counter);
        this.info.emit('Detektor uruchomiony, bo dziecko zainicjowało akcję');
    }

    chOnWish(){
        const dialogRef = this.choiceModal.open(ModalSingleChoice, {
            data: CD_KINDS
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result != undefined) {
                eval('this.chDetRef.' + result.command + '()');
                this.info.emit(result.note);
            }

        })
    }
}

@Component({
    selector: 'tst',
    template: `
    <internal [config]="config" (info)="setInfoContent($event)"></internal>
    <button class="mat-raised-button" (click)="onClick('property')" style="margin-right: 15px">Change on property</button>
    <button class="mat-raised-button" (click)="onClick('object')" matBadge="c" matBadgePosition="after">Change on object</button>
    <br>
    <br>
    <p>{{_infoContent}}</p>
    `
})
export class Tst2Component {
    config = { position: 'top'};

    private _infoContent: string = '';

    onClick(arg: string) {
        switch(arg){
            case 'property':{
                this.config.position = 'bottom';
                this._infoContent = "Detektor nie uruchomiony, bo zmieniła się tylko properta obiektu, a nie obiekt";
                break;
            }
            case 'object':{
                this.config = {position: 'bottom'};
                this._infoContent = 'Detektor uruchomiony, bo zmienił się cały obiekt';
                break;
            }
            default:
                this._infoContent = '';
        }
        
    }

    setInfoContent(val: string){
        this._infoContent = val;
    }


}