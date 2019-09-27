import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'angular-animations',
    templateUrl: 'animations.html',
    animations: [
        trigger('divState', [
            state('normal', style({
                backgroundColor: 'red',
                transform: 'translateX(0)'
            })),
            state('highlighted', style({
                backgroundColor: 'blue',
                transform: 'translateX(100px)'
            })),
            transition('normal => highlighted', animate(400)),
            transition('highlighted => normal', animate(400))
        ]),
        trigger('wildState', [
            state('normal', style({
                backgroundColor: 'red',
                transform: 'translateX(0) scale(1)'
            })),
            state('highlighted', style({
                backgroundColor: 'blue',
                transform: 'translateX(100px) scale(1)'
            })),
            state('schrunken', style({
                backgroundColor: 'green',
                transform: 'translateX(0px) scale(0.5)'
            })),
            transition('normal => highlighted', animate(400)),
            transition('highlighted => normal', animate(1000)),
            transition('schrunken <=> *', [
                style({
                    backgroundColor: 'orange'
                }),
                animate(1000, style({
                    borderRadius: '50px'
                })),
                animate(500)
            ])
        ]),
        trigger('objVisible', [
            transition('void => *', [
                animate(500, keyframes([
                    style({
                        transform: 'translateX(-100px)',
                        opacity: 0,
                        offset: 0
                    }),
                    style({
                        transform: 'translateX(-60px)',
                        opacity: 0.5,
                        offset: 0.8
                    }),
                    style({
                        transform: 'translateX(0px)',
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ]),
            transition('* => void', [
                animate(500),
                style({
                    transform: 'translateX(100px) scale(2)',
                    opacity: 0
                })
            ])
        ]),
    ]
})
export class AngularAnimationsPage implements OnInit{
    private state: string = 'normal';
    private wildState: string = 'normal';
    private objectVisible: boolean = false;

    private objectsNamesToBeAnimated: Array<string> = [];
    private inputTxt: FormGroup;
    private txt: FormControl;
    private buttonDisabled: boolean = true;

    ngOnInit(){
        this.inputTxt = new FormGroup({
            txt: new FormControl('', Validators.required)
        });
        this.inputTxt.controls['txt'].valueChanges.subscribe(() => {
            if(this.inputTxt.controls['txt'].value){
                this.buttonDisabled = false;
            } else {
                this.buttonDisabled = true;
            }
        });
        
    }

    onAnimateOne(){
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState="normal";
    }

    onAnimateTwo(){
        this.wildState = 'schrunken';
    }

    onAnimateThree(){
        let inputValue = this.inputTxt.controls['txt'].value;
        this.objectsNamesToBeAnimated.push(inputValue);
        this.inputTxt.controls['txt'].setValue('');
    }

    removeItem(itm: string){
        let res = this.objectsNamesToBeAnimated.findIndex(x => x == itm);
        this.objectsNamesToBeAnimated.splice(res, 1);
    }

    animationDone(){
        console.log("Animacja zakończona");
    }
}