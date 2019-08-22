import { Component } from "@angular/core";
import { IBuilding } from '../models/di-model';

const objects: Array<IBuilding> = [
    {name: 'Blok mieszkalny', isMadeOfStone: true, hasCeiling: true},
    {name: 'Szałas', isMadeOfStone: false, hasCeiling: true},
    {name: 'Ogrodzenie siatkowe', isMadeOfStone: false, hasCeiling: false},
    {name: 'Altana ogrodowa', isMadeOfStone: false, hasCeiling: true},
]

@Component({
    selector: 'dzi-imp-extra',
    template: `
    <br>
    <div style="display-flex">
    <button mat-raised-button [disabled]="procedureOnGoing" style="margin-right: 5px" (click)="startDemo()">Start cycle</button>
    <button mat-raised-button [disabled]="!procedureOnGoing" (click)="stopDemo()">Stop cycle</button>
    <div>
    <br>
    <p>Element displayed: {{name}}</p>
    <p>Czy z kamienia? {{isMadeOfStone ? 'Tak' : 'Nie'}}</p>
    <p>Czy ma sufit? {{hasCeiling ? 'Tak' : 'Nie'}}</p>
    <br>

    `
})
export class DIExtraPage implements IBuilding {
    name;
    isMadeOfStone;
    hasCeiling;
    private procedureOnGoing: boolean = false;

    // constructor(theName){
    //     this.name = theName;
    // }

    getName(){
        console.log('Name to jest: ', this.name);
    }

    startDemo(){

        this.procedureOnGoing = true;
        let counter: number = 0;




        let myInterval = setInterval(() => {

            if(!this.procedureOnGoing) {
                clearInterval(myInterval);
            }
            if(counter == objects.length) {counter = 0};

            this.name = objects[counter].name;
            this.isMadeOfStone = objects[counter].isMadeOfStone;
            this.hasCeiling = objects[counter].hasCeiling;
            
            counter++;
        },500);


        
    }

    stopDemo(){
        this.procedureOnGoing = false;
    }


}

export class Budynek {
    private kind: string;

    constructor(desc: string){
        this.kind = desc;
    }

    getData(){
        console.log(this.kind);
    }
}

export class Dom extends Budynek {
    private color: string;

    constructor(d: string, c: string){
        super(d);
        this.color = c;
    }

    getD(){
        console.log('d: ', ', c: ', this.color);
    }


}