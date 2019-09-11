import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AngularPipePage } from './pages/angular-pipe';

const routes: Routes =[
    {path: '', component: AngularPipePage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AngularPipeRoutingModule {}