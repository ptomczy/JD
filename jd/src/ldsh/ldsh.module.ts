import { NgModule } from "@angular/core";
import { LodashRoutingModule } from './ldsh-routing.module';
import { LodashPage } from './pages/ldsh';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [LodashPage],
    imports: [LodashRoutingModule, SharedModule],
    exports: [LodashPage]
})
export class LodashModule {

}