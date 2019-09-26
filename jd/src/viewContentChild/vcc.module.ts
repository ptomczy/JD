import { NgModule } from "@angular/core";
import { VCCRoutingModule } from './vcc-routing.module';
import * as idx from './index';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [idx.FirstVCCComponent, idx.SecondVCCComponent, idx.VCCPage],
    imports: [VCCRoutingModule, MaterialModule, CommonModule],
    exports: [idx.FirstVCCComponent, idx.SecondVCCComponent, idx.VCCPage]
})
export class VCCModule {

}