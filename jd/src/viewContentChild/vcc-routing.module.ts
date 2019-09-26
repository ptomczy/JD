import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { VCCPage } from './pages/vcc';

const routes: Routes = [
    {path: '', component: VCCPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class VCCRoutingModule {

}