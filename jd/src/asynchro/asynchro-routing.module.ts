import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AsynchroPage } from './pages/asynchro';

const routes: Routes = [
    {path: '', component: AsynchroPage, pathMatch: 'full'}    
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AsynchroRoutingModule {

}