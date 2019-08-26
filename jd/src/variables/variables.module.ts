import { NgModule } from "@angular/core";
import { VariablesPage } from './pages/variables';
import { VariablesRoutingModule } from './variables-routing.module';

@NgModule({
    declarations: [VariablesPage],
    imports: [VariablesRoutingModule],
    exports: [VariablesPage]
})
export class VariablesModule {

}