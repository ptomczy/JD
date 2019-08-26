import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { VariablesPage } from './pages/variables';

const routes: Routes = [
    {path: '', component: VariablesPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class VariablesRoutingModule {

}