import { NgModule } from "@angular/core";
import { TablesPage } from './pages/tables';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { TablesService } from './services/tables.service';
import { ModalMultiselect } from 'src/shared/components/modal-multiselect/modal-multiselect';

@NgModule({
    declarations: [TablesPage],
    imports: [CommonModule, MaterialModule, NgbModule, TablesRoutingModule, SharedModule],
    providers: [TablesService],
    exports: [TablesPage],
    entryComponents: [ModalMultiselect]
})
export class TablesModule {

}