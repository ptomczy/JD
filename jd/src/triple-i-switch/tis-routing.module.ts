import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TisPage } from './pages/tis';

const routes: Routes = [
    {path: '', component: TisPage, pathMatch: 'full'}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
})
export class TisRoutingModule{}
