import { NgModule } from "@angular/core";
import { DIRoutingModule } from './di-routing.module';
import { DIPage } from './pages/di';
import { DIExtraPage } from './pages/di-extra';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [DIPage, DIExtraPage],
    imports: [DIRoutingModule, MaterialModule],
    exports: [DIPage, DIExtraPage]
})
export class DIModule {

}