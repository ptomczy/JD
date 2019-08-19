import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
    {path: '', component: RxjsComponent, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class RxjsRoutingModule {

}