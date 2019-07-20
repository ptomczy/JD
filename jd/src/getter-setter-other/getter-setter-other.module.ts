import { NgModule } from "@angular/core";
import { GSOPage } from './pages/gso';
import { MaterialModule } from 'src/app/material.module';
import { GSORoutingModule } from './getter-setter-other-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [GSOPage],
    imports: [MaterialModule, GSORoutingModule, SharedModule, CommonModule],
    exports: [GSOPage]
})

export class GSOModule {

}