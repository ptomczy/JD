import { Component, OnInit } from "@angular/core";
import { resolve } from 'q';

@Component({
    selector: 'extra-one-note',
    templateUrl: 'eon.html'
})
export class ExtraOneNoteComponent implements OnInit{

    private optionSelected: string = null;

    private firstAsynchro(info1, cbFunction) {setTimeout(() => {let inf = info1; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private secondAsynchro(info2, cbFunction) {setTimeout(() => {let inf = info2; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private thirdAsynchro(info3, cbFunction) {setTimeout(() => {let inf = info3; console.log(inf); cbFunction()}, Math.random() * 4000)};

    private firstAsynchroParallel(info1, cbFunction) {setTimeout(() => {let inf = info1; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private secondAsynchroParallel(info2, cbFunction) {setTimeout(() => {let inf = info2; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private thirdAsynchroParallel(info3, cbFunction) {setTimeout(() => {let inf = info3; console.log(inf); cbFunction()}, Math.random() * 4000)};

    private firstAsynchroBis(info1, cbFunction) {setTimeout(() => {let inf = info1; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private secondAsynchroBis(info2, cbFunction) {setTimeout(() => {let inf = info2; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private thirdAsynchroBis(info3, cbFunction) {setTimeout(() => {let inf = info3; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private fourthAsynchroBis(info4, cbFunction) {setTimeout(() => {let inf = info4; console.log(inf); cbFunction()}, Math.random() * 4000)};

    private firstAsynchroPromise: Promise<any>;
    private secondAsynchroPromise: Promise<any>;
    private thirdAsynchroPromise: Promise<any>;
    
    private firstAsynchroParallelPromise: Promise<any>;
    private secondAsynchroParallelPromise: Promise<any>;
    private thirdAsynchroParallelPromise: Promise<any>;
        
    private firstAsynchroBisPromise: Promise<any>;
    private secondAsynchroBisPromise: Promise<any>;
    private thirdAsynchroBisPromise: Promise<any>;
    private fourthAsynchroBisPromise: Promise<any>;
        

    ngOnInit(){

        
        
    }

    asynchroIssuesWithCallbacks(){ // 3 asynchro jedna po drugiej && 3 asynchro paralell, potem 4 po nich bis
        
        this.firstAsynchroParallel('Info 1 Parallel', () => {});
        this.secondAsynchroParallel('Info 2 Parallel', () => {});
        this.thirdAsynchroParallel('Info 3 Parallel', () => {});

        this.firstAsynchro('Info 1 asynchro', () => {
            return this.secondAsynchro('Info 2 asynchro', () => {
                return this.thirdAsynchro('Info 3 asynchro', () => {

                    console.log('First stage ready');
                    this.firstAsynchroBis('Info 1 bis', () => {
                        return this.secondAsynchroBis('Info 2 bis', () => {
                            return this.thirdAsynchroBis('Info 3 bis', () => {
                                return this.fourthAsynchroBis('Info 4 bis', () => {
                                    console.log('Test job done');
                                })
                            })
                        })
                    });
                })
            })
        });
    
    }

    asynchroIssueWithPromises(){

        this.firstAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 1 asynchro'; res(info)},Math.random() * 4000));
        this.secondAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 2 asynchro'; res(info)},Math.random() * 4000));
        this.thirdAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 3 asynchro';  res(info)},Math.random() * 4000));
        
        this.firstAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 Parallel'; resolve(info)},Math.random() * 4000));
        this.secondAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 Parallel'; resolve(info)},Math.random() * 4000));
        this.thirdAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 Parallel'; resolve(info)},Math.random() * 4000));
            
        this.firstAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 bis'; resolve(info)},Math.random() * 4000));
        this.secondAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 bis'; resolve(info)},Math.random() * 4000));
        this.thirdAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 bis'; resolve(info)},Math.random() * 4000));
        this.fourthAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 4 bis'; resolve(info)},Math.random() * 4000));
        
        this.firstAsynchroParallelPromise.then(r => console.log(r));
        this.secondAsynchroParallelPromise.then(r => console.log(r));
        this.thirdAsynchroParallelPromise.then(r => console.log(r));

        this.firstAsynchroPromise.then(r => {
            console.log(r);
            return this.secondAsynchroPromise.then(r2 => {
                console.log(r2);
                return this.thirdAsynchroPromise.then(r3 => {
                    console.log(r3);
                    console.log('First stage ready');
                })
                .then(() => this.firstAsynchroBisPromise.then(r => console.log(r)))
                .then(() => this.secondAsynchroBisPromise.then(r => console.log(r)))
                .then(() => this.thirdAsynchroBisPromise.then(r => console.log(r)))
                .then(() => this.fourthAsynchroBisPromise.then(r => console.log(r)))
                .catch(err => console.error(err))
                .finally(() => console.log('Test job done'))
            })
        })
    }

    async asynchroIssuesWithAsync(){
        this.firstAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 1 asynchro'; res(info)},Math.random() * 4000));
        this.secondAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 2 asynchro'; res(info)},Math.random() * 4000));
        this.thirdAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 3 asynchro';  res(info)},Math.random() * 4000));
        
        this.firstAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 Parallel'; resolve(info)},Math.random() * 4000));
        this.secondAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 Parallel'; resolve(info)},Math.random() * 4000));
        this.thirdAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 Parallel'; resolve(info)},Math.random() * 4000));
            
        this.firstAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 bis'; resolve(info)},Math.random() * 4000));
        this.secondAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 bis'; resolve(info)},Math.random() * 4000));
        this.thirdAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 bis'; resolve(info)},Math.random() * 4000));
        this.fourthAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 4 bis'; resolve(info)},Math.random() * 4000));

        try {
            console.log(await this.firstAsynchroPromise);
            console.log(await this.secondAsynchroPromise);
            console.log(await this.thirdAsynchroPromise);

            console.log(await this.firstAsynchroParallelPromise);
            console.log(await this.secondAsynchroParallelPromise);
            console.log(await this.thirdAsynchroParallelPromise);

            console.log('Fist stage ready');

            console.log(await this.firstAsynchroBisPromise);
            console.log(await this.secondAsynchroBisPromise);
            console.log(await this.thirdAsynchroBisPromise);
            console.log(await this.fourthAsynchroBisPromise);
            
            console.log('Test job done');
        } catch(err) {
            console.error(err);
        }

    }

    sel(arg: string): void {
        this.optionSelected = arg;
    }

    runProcedure(){

        console.clear();
        switch(this.optionSelected){
            case 'callback': {
                this.asynchroIssuesWithCallbacks();
                break;
            }
            case 'promise': {
                this.asynchroIssueWithPromises();
                break;
            }
            case 'asyncawait': {
                this.asynchroIssuesWithAsync();
                break;
            }
            default:
                return null;
        }
    }
}