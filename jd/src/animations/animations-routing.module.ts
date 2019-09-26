import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularAnimationsPage } from './pages/animations';

const routes: Routes = [
    {path: '', component: AngularAnimationsPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AnimationsRoutingModule {

}