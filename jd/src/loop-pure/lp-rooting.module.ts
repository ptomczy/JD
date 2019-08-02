import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LPPage } from './pages/lp';


const routes: Routes = [
    {path: '', component: LPPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class LPRoutingModule {}