import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import 'moment/locale/pl'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'moment',
    templateUrl: 'mom.html'
})
export class MomentPage implements OnInit {

    private now: moment.Moment;
    
    private dateForm: FormGroup;
    
    private days: Array<{number: number, status: string}> = [];
    private months: Array<number> = [];
    private years: Array<number> = [];

    private selectedDayDeletedHint: string = '';
    private datePutAlltogether: string;

    private nrOfDateElement: number = null;
    
    private nrOfDateElementForm: FormGroup;

    ngOnInit(){
        moment.locale("pl");
        this.now = moment();
        this.dateForm = new FormGroup({
            dayValue: new FormControl('', Validators.required),
            monthValue: new FormControl('', Validators.required),
            yearValue: new FormControl('', Validators.required)
        });

        this.nrOfDateElementForm = new FormGroup({
            dElement: new FormControl([''])
        })

        for(let i = 1; i < 32; i++) {
            this.days.push({number: i, status: "enabled"});
        }

        for(let i = 1; i < 13; i++) {
            this.months.push(i);
        }

        for(let i = 2010; i < 2030; i++) {
            this.years.push(i);
        }
    }

    generate(){
        let d = this.dateForm.value.dayValue.toString();
        if(d.length < 2){
            d = "0" + d;
        }

        let m = this.dateForm.value.monthValue.toString();
        if(m.length < 2) {
            m = "0" + m;
        }

        let y = this.dateForm.value.yearValue.toString();

        let dateSetUp = m + '-' + d + '-' + y;        
        this.datePutAlltogether = moment(dateSetUp).format("LL"); 
    }

    change(inf: {el: string, val: number}) {
        switch(inf.el) {
            case 'month': {
                let selectedMonth = moment().month(inf.val-1).format("MM");
                if(selectedMonth.toString().length < 2) {
                    selectedMonth = ("0" + selectedMonth).toString();
                }
                
                if(this.dateForm.value.yearValue) {
                    let amountOfMonthDays = moment(this.dateForm.value.yearValue.toString() + '-' + selectedMonth).daysInMonth();
                    this.setLimitForMonthDays(amountOfMonthDays);
                } else {
                    let currYear = moment().year();
                    let amountOfMonthDays = moment(currYear + '-' + selectedMonth).daysInMonth();
                    this.setLimitForMonthDays(amountOfMonthDays);
                }
                break;
            }
            case 'year': {
                let selectedYear = moment().year(inf.val).format("YYYY");
                if(this.dateForm.value.monthValue) {
                    let selectedMonth = this.dateForm.value.monthValue;
                    if(selectedMonth.toString().length < 2) {
                        selectedMonth = "0" + selectedMonth;
                    }
                    let amountOfMonthDays = moment(selectedYear + '-' + selectedMonth).daysInMonth();
                    this.setLimitForMonthDays(amountOfMonthDays);
                }
            }
        }
    }

    setLimitForMonthDays(maxDaysAmount: number){
        let dayValue = this.dateForm.value.dayValue;
        if(!dayValue) {
            dayValue = 31;
        }

        if(dayValue > maxDaysAmount) {
            this.dateForm.patchValue({dayValue: null});
            this.selectedDayDeletedHint = 'Exceeded day number for selected month. Pick up a new one.';
        } else {
            this.selectedDayDeletedHint='';
        }
        this.days.map(day => {
            if(day.number > maxDaysAmount){
                day.status = 'disabled';
            } else {
                day.status = 'enabled';
            }
            
        })

    }

    send(){
        console.log("Wynik: ", this.nrOfDateElementForm.controls.dElement.value);
    }

}