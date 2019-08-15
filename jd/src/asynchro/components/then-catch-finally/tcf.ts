import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tcf',
    templateUrl: 'tcf.html'
})
export class TCFComponent implements OnInit{

    private buttonClicked: boolean;
    private myPromise: Promise<any>;
    private commentValue: string;
    private buttonActive: boolean;
    private againButtonActive: boolean;

    ngOnInit(){
        this.buttonActive = true;
        this.buttonClicked = false;
        this.commentValue = '';
        this.againButtonActive = false;

        this.myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.buttonClicked){
                    resolve("Zajebiście, kliknąłeś przycisk w czasie!");
                } else {
                    this.buttonActive = false;
                    reject(new Error("No niestety minęło 5 sekund i przycisk nie został klinięty"));
                }
                this.againButtonActive = true;
            },5000)
        })

        //albo
        // this.myPromise.then(
        //     null,
        //     error => this.commentValue = error
        // )
        //albo
        this.myPromise.catch(e => this.commentValue = e);
    }

    buttonClick(){
        this.buttonClicked = true;
        this.myPromise.then(result => this.commentValue = result)
        this.buttonActive = false;
        this.againButtonActive = false;
    }

    pleaseAgain(){
        this.buttonActive = true;
        this.buttonClicked = false;
        this.commentValue = '';
        this.againButtonActive = false;

        this.myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.buttonClicked){
                    resolve("Zajebiście, kliknąłeś przycisk w czasie!");
                } else {
                    this.buttonActive = false;
                    reject(new Error("No niestety minęło 5 sekund i przycisk nie został klinięty"));
                }
                this.againButtonActive = true;
            },5000)
            
        })

        this.myPromise.catch(e => this.commentValue = e);
    }
}