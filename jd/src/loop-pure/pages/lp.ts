import { Component, OnInit, HostBinding, HostListener } from "@angular/core";
import { GeneralTableService } from 'src/shared/sevices/general-table.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'lp',
    templateUrl: 'lp.html'
})
export class LPPage implements OnInit {

    private items: Array<any>;
    private selectedElement: any;
    private trigVal: any;
    private ctrToDisplay: number | string = 'Jeszcze nie ruszył';
    private myInterval: any;

    constructor(private dataService: GeneralTableService){

    }

    ngOnInit(){
        this.items = this.dataService.generalData;
        this.selectedElement = null;
        this.trigVal = 'Przed zmianą';
    }

    setSelectedElement(event: any){
        this.selectedElement = event;
        console.log("Incoming element: ", this.selectedElement);
    }

    useSimpleFor(){
        let res: Array<any> = [];
        for(let i = 0; i <= this.items.length -1; i++){
            res[i] = this.items[i].name;
        };
        console.log("(Simple For) Result: ", res);
    }

    useForObject(){
        this.items.forEach(x => {
            for(let m in x){
                console.log("(ForObject - in) Element obiektu ", x.name, ": ", x[m]);
            }
        })
    }

    useForeach(){
        let tmp: Array<string> = [];
        let res = Promise.resolve(this.items.forEach(x => {
            x.carMake.split('').map(m => {
                if(m.slice(0) == 'P' || m.slice(0) == 'R') {
                    tmp.push(x.name);
            }});
        }));

        res.then(() => console.log("(ForEach loop) Set of data: ", tmp));
        
    }

    useWhile1(){ //Observable

        let counter: number = 1;
        
            this.myInterval = setInterval(() => {
                this.ctrToDisplay = counter;
                counter++;
            }, 500) 
    }

    useWhile2(){//Promise
        let counter: number = 0;
        setInterval(() => {
            let prom = Promise.resolve(() => {
                counter++;
                console.log('Oto ', counter);
            })
            prom.then();
        }, 500)
    }

    setTrigVal(val: any){
        this.trigVal = val;
        if(this.trigVal) {
            this.useWhile1();
        } else {
            clearInterval(this.myInterval);
            this.ctrToDisplay = 'wyzerowany';
        }
    }

    useDo(){

    }

    useMap(){

    }

}