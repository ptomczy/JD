import { NgModule } from "@angular/core";
import { MomRoutingModule } from './mom-routing.module';
import { MomentPage } from './pages/mom';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [MomentPage],
    imports: [MomRoutingModule, ReactiveFormsModule, MaterialModule, CommonModule, FormsModule],
    exports: [MomentPage]
})
export class MomModule {

}