import { Component } from "@angular/core";
import { IPowerType, EnergySources } from '../models/abstract-model';

@Component({
    selector: 'abstract-page',
    templateUrl: 'abstract.html'
})
export class Abs {

    makeNew(){
        let newObj = new OrdinaryCar(
            "Samochód osobowy", 
            true, 
            {combustion: true, energySource: EnergySources.Petroleum, name: 'Silnik spalinowy'}, 
            "WX123456");
        console.log("Nowy obiekt to: ", newObj);

        let info = newObj.usageTime().then(x => { 
            return console.log("Metoda usageTime tego obiektu zwraca: ", x);
        });
        
    }

    displayTxt(){
        let newObj = new OrdinaryCar(
            "Ciężarówka",
            true,
            {combustion: true, energySource: EnergySources.Petroleum, name: 'Silnik spalinowy'},
            "WE765432"
        );
        let info = newObj.giveText();
        console.log('Tekst informacyjny: ', info);
    }
}

export abstract class MeanOfTransportation {
    private name: string;
    private hasWheels: boolean;
    private sourceOfMovement: IPowerType;
    protected chujowyTekst: string;

    abstract usageTime(): Promise<number>; //abstrakcyjna metoda; musi być zdefiniowana w klasie pochodnej

    protected gimmieText(txt: string): string {
        return "Zwracam tekst z gimmieText protected: " + txt;
    }

    constructor(nm: string, hasWhls: boolean, som: IPowerType){
        this.name = nm;
        this.hasWheels = hasWhls;
        this.sourceOfMovement = som;
        this.chujowyTekst = "Przyrośnięty napletek";
    }
}

export class OrdinaryCar extends MeanOfTransportation {
    private regNumber: string;

    constructor(name: string, hasWheels: boolean, som: IPowerType, private regNr: string){
        super(name, hasWheels, som);
        this.regNumber = regNr;

    }

    usageTime(): Promise<number> {
        return new Promise((res) => {
            setTimeout(() => res(Math.random() * 10) , 2000);
        })
    }

    giveText() {
        return super.gimmieText(this.chujowyTekst);
    }
}

