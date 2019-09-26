import { NgModule } from "@angular/core";
import { AnimationsRoutingModule } from './animations-routing.module';
import { AngularAnimationsPage } from './pages/animations';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AngularAnimationsPage],
    imports: [AnimationsRoutingModule, MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AngularAnimationsPage]
})
export class AnimationsModule {

}