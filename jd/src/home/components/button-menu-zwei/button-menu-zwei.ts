import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from "@angular/core";
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

export interface Imilestone {
    name: string,
    sub: string,
    presub: string,
    adr: string
}

export enum ChoiceKeys {
    name,
    sub,
    presub
}

const MILESTONES: Array<Imilestone> = [
    {name: 'Typescript poziom średni', sub: 'Import zależności z innych plików, wraz z index', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Zastosowanie klas, klas abstrakcyjnych i interfejsów', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Dziedziczenie i implementacja', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Modyfikatory public, private i protected', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Właściwości (get, set)', presub: null, adr: 'gso'},
    {name: 'Typescript poziom średni', sub: 'Zakresy zmiennych let, const, var', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Typy zmiennych', presub: null, adr: 'gso'},
    {name: 'Typescript poziom średni', sub: 'Operacje na datach (nie moment.js): tworzenia, wyciąganie konkretnych', presub: null, adr: 'dtl'},
    {name: 'Typescript poziom średni', sub: 'Operacja na tablicach (filtracja, wyszukiwanie elementów, mapowanie)', presub: null, adr: 'tables'},
    {name: 'Typescript poziom średni', sub: 'Zastosowanie odpowiedniej pętli (for, for dla obiektu, forEach, while, do', presub: null, adr: 'dtl'},
    {name: 'Typescript poziom średni', sub: 'Zastosowanie warunków if z == i ===, switch', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Tworzenie obiektów immutable, kiedy ich używać', presub: null, adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Zrozumienie asynchroniczności', presub: 'Tworzenie promisów przez resolve, reject', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Zrozumienie asynchroniczności', presub: 'Użycie przy pomocy then, catch, finally', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Zrozumienie asynchroniczności', presub: 'Użycie async i await', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Rxjs', presub: 'Tworzenie obiektów przez of, create, z promisa', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Rxjs', presub: 'Użycie w odpowiednim momencie i ubiecie subskrypcji', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Rxjs', presub: 'Użycie combinateLatest, map, switchMap, flatMap, tap, catchError', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Moment.js', presub: 'Tworzenie daty i wartości dnia, miesiąca roku itd', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Moment.js', presub: 'Dodawanie odejmowanie jednostek czasowych', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Moment.js', presub: 'Formatowanie', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Moment.js', presub: 'Wyciąganie różnic', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Lodash', presub: 'Grupowanie', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Lodash', presub: 'Sortowanie', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Obsługa funkcjonalności w odpowiednich zdarzeniach', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Pipe', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Providery', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Wstrzykiwanie zależności, zrozumienie w którym miejsciu co wstrzyknąć', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Ujęcie co się da w odpowiednim module', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Angular', presub: 'Obsługa routingu', adr: 'abstract'},
    {name: 'Typescript poziom średni', sub: 'Ionic', presub: 'Użycie komponentów Ionica', adr: 'abstract'},
]

@Component({
    selector: 'button-menu-zwei',
    templateUrl: 'button-menu-zwei.html',
    providers: [MatMenuTrigger]
})
export class ButtonMenuZwei implements OnInit{

    milestoneNames: Array<string> = [];
    milestoneSubs: Array<string> = [];
    private milestonePresubs: Array<string> = [];
    selectedItem: Imilestone = null;
    @Input() buttonCaption: string = 'Select scope';
    nameSubs: Array<any> = [];
    selectedMenuNameItem: string = '';
    private lastChoiceKey: ChoiceKeys;
    @Output() milestones: EventEmitter<any> = new EventEmitter<any>();
    @Output() choiceKey: EventEmitter<ChoiceKeys> = new EventEmitter<ChoiceKeys>();
    @Output() selectedItm: EventEmitter<string> = new EventEmitter<string>();
    
    @ViewChild(MatMenuTrigger, {read: MatMenuTrigger, static: true}) trigger: MatMenuTrigger;


    constructor(private router: Router, private menu: MatMenuTrigger){}

    ngOnInit(){
        this.milestoneNames = [...new Set(MILESTONES.map(x => x.name))];
        this.milestoneSubs = [...new Set(MILESTONES.map(x => x.sub))];

        //let result = this.getSubsPerName('Brudna');
        //console.log("Result to: ", result);
    }

    selectName(el: string){
        this.lastChoiceKey = ChoiceKeys.name;
        this.changeSubject(el);
        this.trigger.closeMenu();

    }

    selectSub(el: string){
        this.lastChoiceKey = ChoiceKeys.sub;
        this.changeSubject(el);
        this.trigger.closeMenu();
    }

    selectPreSub(el: string){
        this.lastChoiceKey = ChoiceKeys.presub;
        this.changeSubject(el);
    }

    changeSubject(arg: string){
        switch(this.lastChoiceKey){
            case ChoiceKeys.name: {
                this.choiceKey.emit(ChoiceKeys.name);
                break;
            };
            case ChoiceKeys.sub: {
                this.choiceKey.emit(ChoiceKeys.sub);
                break;
            };
            case ChoiceKeys.presub: {
                this.choiceKey.emit(ChoiceKeys.presub);
                break;
            };
            default:
                console.log("Default dupa"); 
        }
        this.buttonCaption = arg;
        this.milestones.emit(MILESTONES);
        this.selectedItm.emit(arg);

        //this.router.navigate(['/abstract']);
    }

    getNameSubs(name: string): Array<string>{
        let res = [...new Set(MILESTONES.filter(x => x.name == name).map(x => x.sub))];
        return res;
    }

    getSubsPerName(name: string): Array<Imilestone>{
        let res = [...new Set(MILESTONES.filter(x => x.name == name))];
        return res;
    }

    setSelectedMenuName(name: string){
        //this.selectedItem = name;
    }

    getSubsPresubs(sub: any): Array<string>{
        let res = [...new Set(MILESTONES.filter(x => x.sub == sub).map(x => x.presub))]
        return res;
    }
}