import { NgModule } from "@angular/core";
import { FormsRoutingModule } from './forms-routing.module';
import { FormsPage } from './pages/forms';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormsPage],
    imports: [FormsRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule], 
    exports: [FormsPage]
})
export class RealFormsModule {

}