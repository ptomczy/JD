import { NgModule } from "@angular/core";
import { Abs, ExtraClass } from './pages/abstract';
import { MaterialModule } from 'src/app/material.module';
import { AbstractRoutingModule } from './abstract-routing.module';

@NgModule({
    declarations: [Abs, ExtraClass],
    imports: [MaterialModule, AbstractRoutingModule],
    exports: [Abs, ExtraClass]
})

export class AbstractModule {

}