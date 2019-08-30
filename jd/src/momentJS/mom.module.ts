import { NgModule } from "@angular/core";
import { MomRoutingModule } from './mom-routing.module';
import { MomentPage } from './pages/mom';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [MomentPage],
    imports: [MomRoutingModule, ReactiveFormsModule, MaterialModule, CommonModule],
    exports: [MomentPage]
})
export class MomModule {

}