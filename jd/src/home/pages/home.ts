import { Component, ViewChild, AfterViewInit, OnInit, ElementRef, Input, HostListener, Renderer2, Directive, OnChanges } from "@angular/core";
import { Imilestone, ChoiceKeys } from '../components/button-menu-zwei/button-menu-zwei';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: 'home.html',
    styles: ['home.scss']
})
export class HomePage {
    private _milestones: Array<Imilestone> = null;
    private _choiceKey: ChoiceKeys = null;
    private _selectedItm: string = null;
    additionalMenuButtonsVisible: Boolean;
    public buttonCaptionUpdated: string = 'Select scope';

    milestones_parents;
    milestones_children: Array<any> = [];
    private milestones_children_object_selected: boolean = false;

    constructor(private router: Router){}

    onMenuChange(){

        this.additionalMenuButtonsVisible = true;

        switch(this._choiceKey){
            case ChoiceKeys.name: {
                this.milestones_parents = [...new Set(this._milestones
                    .filter(x => x.name == this._selectedItm)
                    .map(y => y.sub
                        ))];

                this.navigator('home');

                if(this.milestones_parents.length == 1 && this.milestones_parents[0] == null){
                    this.additionalMenuButtonsVisible = false;
                    let selectedFullObject = this._milestones.filter(x => 
                        x.name == this._selectedItm
                    );

                    this.navigator(selectedFullObject[0].adr);

                }
                break;
            }
            case ChoiceKeys.sub: {
                this.milestones_parents = [...new Set(this._milestones
                    .filter(x => x.sub == this._selectedItm)
                    .map(y => y.presub
                        ))];

                this.navigator('home');

                if(this.milestones_parents.length == 1 && this.milestones_parents[0] == null){
                    this.additionalMenuButtonsVisible = false;
                    let selectedFullObject = this._milestones.filter(x => 
                        x.sub == this._selectedItm
                    );

                    this.navigator(selectedFullObject[0].adr);
                }
                break;
            }
            case ChoiceKeys.presub: {
                this.additionalMenuButtonsVisible = false;

                let selectedFullObject = this._milestones.filter(x => 
                    x.presub == this._selectedItm
                );

                this.navigator(selectedFullObject[0].adr);

                break;
            }
            default: 
        }
            
    }

    onEnter(ev: HTMLElement){
        let ovrElementName = ev.children[0].textContent;

        switch(this._choiceKey){
            case ChoiceKeys.name: {
                this.milestones_children = [...new Set(this._milestones
                    .filter(x => x.sub == ovrElementName)
                    .map(y => y.presub
                        ))];
                break;
            }
            case ChoiceKeys.sub: {
                this.milestones_children = [];
                break;   
            }
            default:
                console.log('Difolt');
        }
        this.onEnterChild(false);
    }
        
    setChoiceKey(key: ChoiceKeys){
        this._choiceKey = key;
    }

    setMilestones(data: Imilestone[]){
        this._milestones = data;
    }

    setSelectedItm(itm: string){
        this._selectedItm = itm;
        this.onMenuChange();
    }

    navigator(addr: string): void {
        this.router.navigate([addr]);
    }

    clickedNavButton(elementOfAddress: any){

        switch(this._choiceKey){

            case ChoiceKeys.name: {

                if(!this.milestones_children_object_selected){

                    let noOfChildElements = this._milestones.filter(m => m.sub == elementOfAddress).length;

                    if(noOfChildElements > 0){
                        this.milestones_parents = [...new Set(this._milestones
                            .filter(x => x.sub == elementOfAddress)
                            .map(y => y.presub)
                            )];
                        this.milestones_children = [];
                        this._choiceKey = ChoiceKeys.sub;
                        
                    } else {
                        let addr = this._milestones.find(z => z.sub == elementOfAddress).adr;
                        this.navigator(addr);
                        this.additionalMenuButtonsVisible = false;
                    }

                } else {

                    let addr = this._milestones.find(z => z.presub == elementOfAddress).adr;
                    this.navigator(addr);
                    this.additionalMenuButtonsVisible = false;

                }
                this.buttonCaptionUpdated = elementOfAddress;
                break;
            }
            case ChoiceKeys.sub: {
                let addr = this._milestones.find(z => z.presub == elementOfAddress).adr;
                this.navigator(addr);
                this.additionalMenuButtonsVisible = false;
                this.buttonCaptionUpdated = elementOfAddress;
                break;
            }
        }

    }

    onEnterChild(info: boolean){
        this.milestones_children_object_selected = info;
    }
}