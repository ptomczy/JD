import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DIPage } from './pages/di';

const routes: Routes = [
    {path: '', component: DIPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class DIRoutingModule {
    
}