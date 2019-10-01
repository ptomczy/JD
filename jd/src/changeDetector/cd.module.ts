import { NgModule } from "@angular/core";
import { CDPage } from './pages/cd';
import { CDRoutingModule } from './cd-routing.module';
import * as idx from './index';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CDPage, idx.CDOneComponent],
    imports: [CDRoutingModule, MaterialModule, CommonModule],
    exports: [CDPage, idx.CDOneComponent]
})
export class CDModule {}