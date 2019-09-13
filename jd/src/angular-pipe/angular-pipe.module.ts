import { NgModule } from "@angular/core";
import { AngularPipeRoutingModule } from './angular-pipe-routing.module';
import { BubasPipe } from './pipes/angular-pipe.pipe';
import { AngularPipePage } from './pages/angular-pipe';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AngularPipePage, BubasPipe],
    imports: [AngularPipeRoutingModule, MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AngularPipePage]
})
export class AngularPipeModule {
    
}