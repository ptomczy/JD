import { Component, OnInit } from "@angular/core";
import { resolve } from 'q';

@Component({
    selector: 'extra-one-note',
    templateUrl: 'eon.html'
})
export class ExtraOneNoteComponent implements OnInit{

    private firstAsynchro(info1, cbFunction) {setTimeout(() => {let inf = info1; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private secondAsynchro(info2, cbFunction) {setTimeout(() => {let inf = info2; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private thirdAsynchro(info3, cbFunction) {setTimeout(() => {let inf = info3; console.log(inf); cbFunction()}, Math.random() * 4000)};

    private firstAsynchroParallel(info1, cbFunction) {setTimeout(() => {let inf = info1; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private secondAsynchroParallel(info2, cbFunction) {setTimeout(() => {let inf = info2; console.log(inf); cbFunction()}, Math.random() * 4000)};
    private thirdAsynchroParallel(info3, cbFunction) {setTimeout(() => {let inf = info3; console.log(inf); cbFunction()}, Math.random() * 4000)};

    private firstAsynchroBis(info1) {setTimeout(() => {let inf = info1; console.log(inf)}, Math.random() * 4000)};
    private secondAsynchroBis(info2) {setTimeout(() => {let inf = info2; console.log(inf)}, Math.random() * 4000)};
    private thirdAsynchroBis(info3) {setTimeout(() => {let inf = info3; console.log(inf)}, Math.random() * 4000)};
    private fourthAsynchroBis(info4) {setTimeout(() => {let inf = info4; console.log(inf)}, Math.random() * 4000)};

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
        //this.asynchroIssuesWithCallbacks();
        this.asynchroIssueWithPromises();
    }

    asynchroIssuesWithCallbacks(){ // 3 asynchro jedna po drugiej && 3 asynchro paralell, potem 3 po nich bis
        
        this.firstAsynchroParallel('Info 1 Parallel', () => {});
        this.secondAsynchroParallel('Info 2 Parallel', () => {});
        this.thirdAsynchroParallel('Info 3 Parallel', () => {});

        this.firstAsynchro('Info 1 asynchro', () => {
            return this.secondAsynchro('Info 2 asynchro', () => {
                return this.thirdAsynchro('Info 3 asynchro', () => {

                    console.log('First stage ready');
                    this.firstAsynchroBis('Info 1 bis');
                    this.secondAsynchroBis('Info 2 bis');
                    this.thirdAsynchroBis('Info 3 bis');
                    this.fourthAsynchroBis('Info 4 bis');
                })
            })
        });
    
    }

    asynchroIssueWithPromises(){

        // this.firstAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 1 asynchro'; console.log(info); res(info)},Math.random() * 4000));
        // this.secondAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 2 asynchro'; console.log(info); res(info)},Math.random() * 4000));
        // this.thirdAsynchroPromise = new Promise((res, _) => setTimeout(() => {let info = 'Info 3 asynchro'; console.log(info); res(info)},Math.random() * 4000));
        
        this.firstAsynchroPromise = new Promise((resolve, reject) => {
            resolve(
                setTimeout(() => {
                    console.log('Dupa');
                }, 1000)
            )
        })

        // this.firstAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 Parallel'; console.log(info); resolve(info)},Math.random() * 4000));
        // this.secondAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 Parallel'; console.log(info); resolve(info)},Math.random() * 4000));
        // this.thirdAsynchroParallelPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 Parallel'; console.log(info); resolve(info)},Math.random() * 4000));
            
        // this.firstAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 1 bis'; console.log(info); resolve(info)},Math.random() * 4000));
        // this.secondAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 2 bis'; console.log(info); resolve(info)},Math.random() * 4000));
        // this.thirdAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 3 bis'; console.log(info); resolve(info)},Math.random() * 4000));
        // this.fourthAsynchroBisPromise = new Promise((resolve, _) => setTimeout(() => {let info = 'Info 4 bis'; console.log(info); resolve(info)},Math.random() * 4000));
        


        // this.firstAsynchroParallelPromise.then();
        // this.secondAsynchroParallelPromise.then();
        // this.thirdAsynchroParallelPromise.then();

        // this.firstAsynchroPromise.then(() => {
        //     return this.secondAsynchroPromise.then(() => {
        //         return this.thirdAsynchroPromise.then(() => {
        //             console.log('First stage ready');
        //             // this.firstAsynchroBisPromise.then();
        //             // this.secondAsynchroBisPromise.then();
        //             // this.thirdAsynchroBisPromise.then();
        //             // this.fourthAsynchroBisPromise.then();
        //         })
        //     })
        // })
    }




}