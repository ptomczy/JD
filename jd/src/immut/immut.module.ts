import { NgModule } from "@angular/core";
import { ImmutRoutingModule } from './immut-routing.module';
import { ImmutPage } from './pages/immut';
import { 
    Tst2Component, 
    InternalComponent 
} from './pages/immut-second';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { ModalSingleChoice } from 'src/shared/components/modal-single-choice/modal-single-choice';

@NgModule({
    declarations: [ImmutPage, 
        Tst2Component, 
        InternalComponent
    ],
    imports: [ImmutRoutingModule, MaterialModule, SharedModule],
    exports: [ImmutPage],
    entryComponents: [ModalSingleChoice]
})
export class ImmutModule {
}