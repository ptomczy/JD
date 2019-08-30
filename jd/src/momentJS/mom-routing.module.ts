import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MomentPage } from './pages/mom';

const routes: Routes = [
    {path: '', component: MomentPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class MomRoutingModule {

}