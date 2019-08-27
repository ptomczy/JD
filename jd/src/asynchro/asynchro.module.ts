import { NgModule } from "@angular/core";
import { AsynchroPage } from './pages/asynchro';
import { AsynchroRoutingModule } from './asynchro-routing.module';
import { PromisesComponent } from './components/promises/promises';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TCFComponent } from './components/then-catch-finally/tcf';
import { AsyncAwaitComponent } from './components/async-await/aa';
import { ExtraOneNoteComponent } from './components/extra-one-note/eon';

@NgModule({
    declarations: [AsynchroPage, PromisesComponent, TCFComponent, AsyncAwaitComponent, ExtraOneNoteComponent],
    imports: [AsynchroRoutingModule, MaterialModule, CommonModule],
    exports: [AsynchroPage, PromisesComponent, TCFComponent, AsyncAwaitComponent, ExtraOneNoteComponent]
})
export class AsynchroModule {

}