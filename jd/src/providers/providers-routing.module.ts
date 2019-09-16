import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProvidersPage } from './pages/providers';

const routes: Routes = [
    {path: '', component: ProvidersPage, pathMatch: 'full'}
]
@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProvidersRoutingModule{

}