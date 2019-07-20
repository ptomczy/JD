import { NgModule } from "@angular/core";
import { Abs } from './pages/abstract';
import { MaterialModule } from 'src/app/material.module';
import { AbstractRoutingModule } from './abstract-routing.module';

@NgModule({
    declarations: [Abs],
    imports: [MaterialModule, AbstractRoutingModule],
    exports: [Abs]
})

export class AbstractModule {

}