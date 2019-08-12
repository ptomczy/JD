import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Record } from 'immutable';


interface IObiektNumber {
    readonly[n: number]: number;
}
const myRecord = Record({a:1, b:2})
@Component({
    selector: 'immut',
    templateUrl: 'immut.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImmutPage{

    private obiekt: {
        readonly bar: number,
        readonly name: string
    } = { bar: 123, name: 'MyName' };
    private gitObiekt: {a: number, b: number};

    constructor(){
        console.log('CDS info: ', ChangeDetectionStrategy);
        this.gitObiekt = {a: 10, b: 20};
    }

    iMutateFoo(obj: { bar: number, name: string }) {
        this.obiekt.bar = obj.bar;
        this.obiekt.name = obj.name;
    }
    
    readonlyClick(){
        this.iMutateFoo({bar: 800, name: 'Mutated name'}); 
        console.log('Takie przychodzi foo: ', this.obiekt);

        let otherObiekt: IObiektNumber = {1: 25, 2: 50};
        
        console.log("Takie idzie przy czytaniu: ", otherObiekt[1]);
        //tu będę próbował zmienić właściwość otherObiektu
        otherObiekt[0] = 12; //kompilator zwraca błąd
        console.log("Takie dostaję po próbie przypisania właściwości dla pierwszego elementu otherObiektu: ", otherObiekt[0]);
    }

    immutableClick(){
        
    }

    
}