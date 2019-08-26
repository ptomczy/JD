import { Component, Input, OnInit } from "@angular/core";

const valueOfConst: string = 'This is valueOfConst';
enum varEnum {
    value1 = 5,
    value2 = 10, 
    value3 = 20
}

@Component({
    selector: 'variables',
    templateUrl: 'variables.html',
})
export class VariablesPage implements OnInit{

    @Input() incValue: boolean;
    private varAny: any;
    private varString: string;
    private varNumber: number;
    private varBoolean: boolean;

    private varArrayOfStrings: Array<string>;
    private varArrayOfStringsOther: string[];
    private varObject: {parOne: string, parTwo: number};
    private varArrayOfObjects: Array<{pOne: number, pTwo: string}>;
    private varTuple: [string, boolean, number, {pX: number, pY: boolean}];
    private varModNumber; //patrz w ngOnInit



    ngOnInit(){
        this.varString = "Testowy string";
        this.varModNumber = (<string>this.varString).length;
        let varNumber = varEnum.value2;

    }

    errorMethod1(mess: string): never { //bo zawsze wyrzuca wyjątek - w tym przypadku błąd
        throw new Error(mess);
    }

    errorMethod2(): never {
        while(true){

        }
    }

    testMethod1(incValue: boolean): string {
        let variableOfLetA = 'This is variableOfLetA';

        if(incValue) {
            let variableOfVarB = 'VariableOfVarB + ' + variableOfLetA;
            return variableOfVarB;
        }

        //return variableOfVarB; <-- kompilator wyświetli błąd, bo variableOfVarB jest nieznana poza blokiem if
    }

    testMethod2(incValue: boolean): void {
        
        if(incValue){
            var variableOfVarA = "This is variableOfVarA";
            let variableOfLetA = "This is variableOfLetA";
        } else {
            return console.log(variableOfVarA); //zwróci undefined, bo deklaracja i definicja nie nastąpiły
        }

        if(incValue){
            console.log(variableOfVarA); //zwróci wartość, bo var obowiązuje w całej metodzie, a nie tylko w bloku wyższego if
            //console.log(variableOfLetA) <-- kompilator wyświetli błąd, bo variableOfLetA jest znane tylko w pierwszym bloku if
        }

        //valueOfConst = 'Dupsko'; przy takim zapisie kompilator wyrzuci błąd, bo nie można przypisać wartości do stałej
        
        
        


    }

}