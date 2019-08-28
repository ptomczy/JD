import { NgModule } from "@angular/core";
// import { RxjsObjectCreateComponent } from './object-create/oc';
// import { RxjsOperatorsComponent } from './rxjs-operators/operators';
// import { RxjsSubscriptionComponent } from './subscription-use/su';
// import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';

import {
    RxjsComponent,
    RxjsObjectCreateComponent,
    RxjsOperatorsComponent,
    RxjsSubscriptionComponent
} from './index';

@NgModule({
    declarations: [RxjsComponent, RxjsObjectCreateComponent, RxjsOperatorsComponent, RxjsSubscriptionComponent],
    imports: [RxjsRoutingModule, MaterialModule, SharedModule, CommonModule],
    exports: [RxjsComponent, RxjsObjectCreateComponent, RxjsOperatorsComponent, RxjsSubscriptionComponent]
})
export class RxjsModule {

}