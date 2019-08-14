import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Record, isImmutable, fromJS } from 'immutable';


interface IObiektNumber {
    readonly[n: number]: number;
}
 interface IDataObject {
     name: string,
     adj: number
 }

const myRecord = Record({a:1, b:2});
const upgMyRecord = new myRecord({b: 3});

const dObase = Record({
    name: '',
    adj: 100
});

//const { Map } = require('immutable');

@Component({
    selector: 'immut',
    templateUrl: 'immut.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImmutPage{

    private code: string = "const { Map } = require('immutable');";

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
        //Komentarz, żeby się skompilowało
        //this.obiekt.bar = obj.bar;
        //.obiekt.name = obj.name;
    }
    
    readonlyClick(){
        this.iMutateFoo({bar: 800, name: 'Mutated name'}); 
        console.log('Takie przychodzi foo: ', this.obiekt);

        let otherObiekt: IObiektNumber = {1: 25, 2: 50};
        
        console.log("Takie idzie przy czytaniu: ", otherObiekt[1]);
        //tu będę próbował zmienić właściwość otherObiektu
        //Komentarz, żeby się skompilowało
        //otherObiekt[0] = 12; //kompilator zwraca błąd
        console.log("Takie dostaję po próbie przypisania właściwości dla pierwszego elementu otherObiektu: ", otherObiekt[0]);
    }

    immutableClick(){
        console.log("Record z immutable: .get:", upgMyRecord.get('b'));
        upgMyRecord.set('b', 15);
        console.log("Po skorzystaniu z .set; record z immutable: .get:", upgMyRecord.get('b'), ", co nie powoduje zmiany obiektu");
        let tmpValue = upgMyRecord.set('b', 15);
        console.log("Po zwrocie nowej wersji seta na obiekcie: ", tmpValue.get('b'));
        console.log("Po zrzucie do JSONa upgMyRecord: ", upgMyRecord.toJSON());
        console.log("Sprawdzenie czy ma a: ", upgMyRecord.has('a'));
        console.log("Sprawdzenie czy argument jest immutable: ", isImmutable(upgMyRecord));
        let x = fromJS(this.gitObiekt);
        

        

    }

    
}