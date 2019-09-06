import { NgModule } from "@angular/core";
import { LodashRoutingModule } from './ldsh-routing.module';
import { LodashPage } from './pages/ldsh';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LodashPage],
    imports: [LodashRoutingModule, SharedModule, MaterialModule, CommonModule],
    exports: [LodashPage]
})
export class LodashModule {

}