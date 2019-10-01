import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CDPage } from './pages/cd';

const routes: Routes = [
    {path: '', component: CDPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class CDRoutingModule {

}