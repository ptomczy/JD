import { NgModule } from "@angular/core";
import { ImmutRoutingModule } from './immut-routing.module';
import { ImmutPage } from './pages/immut';

@NgModule({
    declarations: [ImmutPage],
    imports: [ImmutRoutingModule],
    exports: [ImmutPage]
})
export class ImmutModule {

}