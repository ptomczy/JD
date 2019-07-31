import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalMultiselect } from 'src/shared/components/modal-multiselect/modal-multiselect';
import { FuelType, IDemoItem } from '../models/demo';
import { TablesService } from '../services/tables.service';

@Component({
    selector: 'tables-page',
    templateUrl: 'tables.html',
    styles: ['tables.scss']
})
export class TablesPage implements OnInit{
    private age: number;
    private district: string;
    private carMake: string;
    private fuelType: string;
    
    private personCarData: IDemoItem[];
    filteredPersonCarData: IDemoItem[];
    private ageFiltered: Array<number> = [];
    private carMakeFiltered: Array<string> = [];
    private districtFiltered: Array<string> = [];
    private fuelTypeFiltered: Array<string> = [];
    private filteredAge: {min: number, max: number};
    private highlightedNumberFilterButton: boolean = false;

    ageButtonCaption: string;
    districtButtonCaption: string;
    carMakeButtonCaption: string;
    fuelTypeButtonCaption: string;

    constructor(private _modalService: NgbModal, private tbs: TablesService){
    }

    ngOnInit(){
        this.ageButtonCaption = 'Age';
        this.districtButtonCaption = 'District';
        this.carMakeButtonCaption = 'Car make';
        this.fuelTypeButtonCaption = 'Fuel type';
        this.personCarData = this.tbs.personCarData;
        this.filteredPersonCarData = this.personCarData;
        this.filteredAge = {min: null, max: null};
    }

    openModal(arg: string){
        let modalRef = this._modalService.open(ModalMultiselect, {
            // beforeDismiss: () => {
            //     console.log('duap');
            //     return Promise.resolve(true);
            // }
        });

 

        switch(arg){
            case 'age': {
                modalRef.componentInstance.filteredAge = this.filteredAge;
                modalRef.result

                    .then(res => {
                        this.filteredAge = res;
                        this.ageFiltered = [];
                        this.personCarData.forEach(x => {
                            (x.age >= res.min && x.age <= res.max) ? this.ageFiltered.push(x.age) : null;
                        })
                    })
                    .then(() => this.filteredPersonCarData = this.mainFilter())
                    .catch(() => null);
                this.handleModalRefResults(modalRef, arg);
                break;
            }
            case 'district': {
                modalRef.componentInstance.filteredItems = this.districtFiltered;
                modalRef.result
                    .then(res => this.districtFiltered = res)
                    .then(() => this.filteredPersonCarData = this.mainFilter())
                    .catch(() => null);
                this.handleModalRefResults(modalRef, arg);
                break;
            }
            case 'carMake': {
                modalRef.componentInstance.filteredItems = this.carMakeFiltered;
                modalRef.result
                    .then(res => this.carMakeFiltered = res)
                    .then(() => this.filteredPersonCarData = this.mainFilter())
                    .catch(() => null);
                this.handleModalRefResults(modalRef, arg);

                break;
            }
            case 'fuelType': {
                modalRef.componentInstance.filteredItems = this.fuelTypeFiltered;
                modalRef.result
                    .then(res => this.fuelTypeFiltered = res)
                    .then(() => this.filteredPersonCarData = this.mainFilter())
                    .catch(() => null);
                this.handleModalRefResults(modalRef, arg);
                break;
            }
            default:
                return null;
        }
    }

    handleModalRefResults(modalRef: NgbModalRef, arg: string){
        modalRef.componentInstance.listOfItems = this.getUniqueValues(this.personCarData, arg);
        modalRef.componentInstance.filterKind = arg;       
    }

    mainFilter(): IDemoItem[]{
        let result = this.personCarData.filter(el => 
            this.foundInFiltered(el, 'age') &&
            this.foundInFiltered(el, 'district') &&
            this.foundInFiltered(el, 'carMake') &&
            this.foundInFiltered(el, 'fuelType')
        )
        this.filteredPersonCarData = result;

        this.highlightedNumberFilterButton = this.ageFiltered.length != this.personCarData.length;
        console.log('Wynik na przycisku: ', this.highlightedNumberFilterButton);

        return result;
    }

    foundInFiltered(element: IDemoItem, key: string): any {

        switch(key){
            case 'age': {
                if(this.ageFiltered.length){
                    return this.ageFiltered.find(a => a == element.age);
                } else {
                    return true;
                }
            }
            case 'district': {
                if(this.districtFiltered.length){
                    return this.districtFiltered.find(a => a == element.district);
                } else {
                    return true;
                }
            }
            case 'carMake': {
                if(this.carMakeFiltered.length){
                    return this.carMakeFiltered.find(a => a == element.carMake);
                } else {
                    return true;
                }
            }
            case 'fuelType': {
                if(this.fuelTypeFiltered.length){
                    return this.fuelTypeFiltered.find(a => a == element.fuelType);
                } else {
                    return true;
                }
            }
        }
    }

    getUniqueValues(arr: Array<any>, arrKey: any){
        let uniqueElementsForKey: any[] = [];
        arr.map(el => {
            if(!uniqueElementsForKey.some(x => x[arrKey] == el[arrKey])) {
                uniqueElementsForKey.push(el);
            }
        });
        let uniqueValues: any[] = uniqueElementsForKey.map(x => x[arrKey]);
        return uniqueValues;
    }

    clearAllFilters(){
        this.ageFiltered = [];
        this.filteredAge = {min: null, max: null};
        this.districtFiltered = [];
        this.carMakeFiltered = [];
        this.fuelTypeFiltered = [];
        this.filteredPersonCarData = this.personCarData;
        this.highlightedNumberFilterButton = false;
    }
}