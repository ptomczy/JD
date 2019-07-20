import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { Abs } from './pages/abstract';

const routes: Routes = [
    {path: '', component: Abs}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AbstractRoutingModule {

}
