import { NgModule } from "@angular/core";
import { AnimationsRoutingModule } from './animations-routing.module';
import { AngularAnimationsPage } from './pages/animations';

@NgModule({
    declarations: [AngularAnimationsPage],
    imports: [AnimationsRoutingModule],
    exports: [AngularAnimationsPage]
})
export class AnimationsModule {

}