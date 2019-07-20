import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DTLPage } from './pages/dtl';

const routes: Routes = [
    {path: '', component: DTLPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DateTableLoopRootingModule{

}