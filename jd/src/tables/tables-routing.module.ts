import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TablesPage } from './pages/tables';

const routes: Routes = [
    {path: '', component: TablesPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class TablesRoutingModule {

}