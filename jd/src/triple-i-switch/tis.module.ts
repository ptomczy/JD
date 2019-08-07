import { NgModule } from "@angular/core";
import { TisRoutingModule } from './tis-routing.module';
import { TisPage } from './pages/tis';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [TisPage],
    imports: [TisRoutingModule, MaterialModule],
    exports: [TisPage]
})
export class TisModule {

}