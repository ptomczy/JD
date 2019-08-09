import { NgModule } from "@angular/core";
import { LoadingProgress } from './components/loading-progress/loading-progress';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { LoadingProgressService } from './sevices/loading-progress-service';
import { MOOCCDirective } from './directives/mouse-over-object-color-change/moocc';
import { ModalMultiselect } from './components/modal-multiselect/modal-multiselect';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BarOverDirective } from './components/modal-multiselect/modal-multiselect.directive';
import { GeneralTableService } from './sevices/general-table.service';
import { TablesService } from 'src/tables/services/tables.service';
import { ModalSingleChoice } from './components/modal-single-choice/modal-single-choice';

@NgModule({
    declarations: [LoadingProgress, MOOCCDirective, ModalMultiselect, BarOverDirective, ModalSingleChoice],
    imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
    exports: [LoadingProgress, MOOCCDirective, ModalMultiselect],
    providers: [LoadingProgressService, NgbActiveModal, NgbModal, ModalMultiselect, GeneralTableService, TablesService],
    entryComponents: [LoadingProgress]
})

export class SharedModule {

}