import { NgModule } from "@angular/core";
import { AngularPipeRoutingModule } from './angular-pipe-routing.module';
import { BubasPipe } from './pipes/angular-pipe.pipe';
import { AngularPipePage } from './pages/angular-pipe';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AngularPipePage, BubasPipe],
    imports: [AngularPipeRoutingModule, MaterialModule, CommonModule],
    exports: [AngularPipePage]
})
export class AngularPipeModule {
    
}