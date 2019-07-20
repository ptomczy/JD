import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GSOPage } from './pages/gso';

const routes: Routes = [
    {path: '', component: GSOPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class GSORoutingModule {

}