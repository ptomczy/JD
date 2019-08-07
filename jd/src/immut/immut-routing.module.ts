import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ImmutPage } from './pages/immut';

const routes: Routes = [
    {path: '', component: ImmutPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ImmutRoutingModule {

}
