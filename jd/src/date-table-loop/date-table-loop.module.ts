import { NgModule } from "@angular/core";
import { DTLPage } from './pages/dtl';
import { DateTableLoopRootingModule } from './date-table-loop-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DTLPage],
    imports: [DateTableLoopRootingModule, MaterialModule, CommonModule],
    exports: [DTLPage]
})
export class DTLModule {

}