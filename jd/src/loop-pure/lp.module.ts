import { NgModule } from '@angular/core';
import { LPPage } from './pages/lp';
import { LPRoutingModule } from './lp-rooting.module';
import { MaterialModule } from 'src/app/material.module';
import { OptComponent } from './components/options/opt';
import { CommonModule } from '@angular/common';
import { TablesService } from 'src/tables/services/tables.service';
import { LoopWhileDirective } from './directives/loop.directive';

@NgModule({
    declarations: [LPPage, OptComponent, LoopWhileDirective],
    imports: [LPRoutingModule, MaterialModule, CommonModule],
    providers: [TablesService],
    exports: [LPPage, OptComponent, LoopWhileDirective]
})
export class LPModule {
    
}