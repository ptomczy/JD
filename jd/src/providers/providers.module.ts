import { NgModule } from "@angular/core";
import { ProvidersPage } from './pages/providers';
import { CommonModule } from '@angular/common';
import { ProvidersRoutingModule } from './providers-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ProvidersService } from './services/providers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ProvidersPage],
    imports: [CommonModule, ProvidersRoutingModule, MaterialModule, HttpClientModule],
    providers: [ProvidersService],
    exports: [ProvidersPage]
})
export class ProvidersModule {

}