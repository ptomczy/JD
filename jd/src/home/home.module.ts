import { NgModule } from "@angular/core";
import { HomePage } from './pages/home';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ButtonMenuZwei } from './components/button-menu-zwei/button-menu-zwei';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [HomePage, ButtonMenuZwei],
    imports: [CommonModule, MaterialModule, SharedModule],
    exports: [HomePage, ButtonMenuZwei]
})
export class HomeModule {

}