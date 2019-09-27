import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'forms-page>',
    templateUrl: 'forms.html'
})
export class FormsPage implements OnInit{

    constructor(private fb: FormBuilder){
        
    }

    private myForm: FormGroup;
    private myOtherForm;

    ngOnInit(){
        this.myForm = new FormGroup({
            inputOne: new FormControl('', Validators.minLength(5)),
            inputTwo: new FormControl('', Validators.minLength(3))
        });
        this.myOtherForm = this.fb.group({
            inputThree: [''],
            inputFour: ['']
        })
    }

    updateAfterKeyRelease(){
        this.myForm.updateValueAndValidity();
    }

    acceptIncomintText(){
        this.buttonClicked();
    }

    buttonClicked(){
        console.log("Form control one value: ", this.myForm.controls['inputOne'].value);
        console.log("Form control two value: ", this.myForm.controls['inputTwo'].value);
        console.log("Form control three value: ", this.myOtherForm.value.inputThree);
        console.log("Form control four value: ", this.myOtherForm.value.inputFour);
    }

}