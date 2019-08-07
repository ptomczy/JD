import { Component, OnInit, HostBinding, HostListener } from "@angular/core";
import { GeneralTableService } from 'src/shared/sevices/general-table.service';
import { FormControl } from '@angular/forms';

const LOOP_ITEMS = [
    {name: 'Simple For', method: 'useSimpleFor()'},
    {name: 'For object', method: 'useForObject()'},
    {name: 'ForEach', method: 'useForEach()'},
    {name: 'SetInterval zamiast while', method: ''},
    {name: 'Do', method: 'useSimpleFor()'},
    {name: 'Map', method: 'useSimpleFor()'}

]

@Component({
    selector: 'lp',
    templateUrl: 'lp.html'
})
export class LPPage implements OnInit {

    private items: Array<any>;
    private itemsFromService: Array<any>;
    private selectedElement: any;
    private trigVal: any;
    private ctrToDisplay: number | string = 'Jeszcze nie ruszył';
    private myInterval: any;
    private observableMethodForm: FormControl;
    private tmpInfo: string = '';

    constructor(private dataService: GeneralTableService){

    }

    ngOnInit(){
        this.itemsFromService = this.dataService.generalData;
        this.items = LOOP_ITEMS;
        this.selectedElement = null;
        this.trigVal = 'Przed zmianą';
        this.observableMethodForm = new FormControl();
    }


    setSelectedElement(event: any){
        this.selectedElement = event;
        //console.log("Incoming element: ", this.selectedElement);
    }

    useSimpleFor(){
        let res: Array<any> = [];
        for(let i = 0; i <= this.itemsFromService.length -1; i++){
            res[i] = this.itemsFromService[i].name;
        };
        console.log("(Simple For) Result: ", res);
    }

    useForObject(){
        this.itemsFromService.forEach(x => {
            for(let m in x){
                console.log("(ForObject - in) Element obiektu ", x.name, ": ", x[m]);
            }
        })
    }

    useForeach(){
        let tmp: Array<string> = [];
        let res = Promise.resolve(this.itemsFromService.forEach(x => {
            x.carMake.split('').map(m => {
                if(m.slice(0) == 'P' || m.slice(0) == 'R') {
                    tmp.push(x.name);
            }});
        }));

        res.then(() => console.log("(ForEach loop) Set of data: ", tmp));
        
    }

    useCounter1(){ //Observable

        let counter: number = 1;
            this.myInterval = setInterval(() => {
                this.ctrToDisplay = counter;
                counter++;
            }, 200)
    }

    useCounter2(){ //Promise
        let counter: number = 0;
        this.myInterval = setInterval(() => {
            let prom = Promise.resolve(counter++);
            this.ctrToDisplay = counter;
            prom.then();
        }, 1000)
    }

    setTrigVal(val: any){
        this.trigVal = val;
        if(this.trigVal) {
            this.observableMethodForm.value ? this.useCounter1() : this.useCounter2();
        } else {
            clearInterval(this.myInterval);
            this.ctrToDisplay = 'wyzerowany';
        }
    }

    useDo(){
        let counter = 0;
        do {
            counter++;
            console.log("Teraz leci info nr ", counter, " z do-loopa");
        } while(counter < 6);
    }

    useMap(){
        this.items.map(x => {
            let obj = x.name.split('');
            if(obj[0] == 'S'){
                console.log("Imię to:", x.name, ", a jego auto to ", x.carMake);
            }
        });
    }

}