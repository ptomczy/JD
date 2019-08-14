import { NgModule } from "@angular/core";
import { AsynchroPage } from './pages/asynchro';
import { AsynchroRoutingModule } from './asynchro-routing.module';
import { PromisesComponent } from './components/promises/promises';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [AsynchroPage, PromisesComponent],
    imports: [AsynchroRoutingModule, MaterialModule],
    exports: [AsynchroPage, PromisesComponent]
})
export class AsynchroModule {

}