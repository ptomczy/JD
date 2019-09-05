import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LodashPage } from './pages/ldsh';

const routing: Routes = [
    {path: '', component: LodashPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routing)]
})
export class LodashRoutingModule {

}