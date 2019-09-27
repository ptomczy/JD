import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FormsPage } from './pages/forms';

const routes: Routes = [
    {path: '', component: FormsPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FormsRoutingModule {

}