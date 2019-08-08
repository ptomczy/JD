import { NgModule } from "@angular/core";
import { ImmutRoutingModule } from './immut-routing.module';
import { ImmutPage } from './pages/immut';
import { 
    // TstComponent, 
    // HelloComponent, 
    Tst2Component, 
    TooltipComponent 
} from './pages/immut-second';

@NgModule({
    declarations: [ImmutPage, 
        // TstComponent, 
        // HelloComponent, 
        Tst2Component, 
        TooltipComponent
    ],
    imports: [ImmutRoutingModule],
    exports: [ImmutPage]
})
export class ImmutModule {
}