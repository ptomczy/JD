import { NgModule } from "@angular/core";
import { AsynchroPage } from './pages/asynchro';
import { AsynchroRoutingModule } from './asynchro-routing.module';
import { PromisesComponent } from './components/promises/promises';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TCFComponent } from './components/then-catch-finally/tcf';

@NgModule({
    declarations: [AsynchroPage, PromisesComponent, TCFComponent],
    imports: [AsynchroRoutingModule, MaterialModule, CommonModule],
    exports: [AsynchroPage, PromisesComponent, TCFComponent]
})
export class AsynchroModule {

}