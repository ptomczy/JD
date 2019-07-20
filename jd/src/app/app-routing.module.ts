import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/home/home.module').then(m => m.HomeModule)},
  {path: 'abstract', loadChildren: () => import('src/abstract/abstract.module').then(m => m.AbstractModule)},
  {path: 'gso', loadChildren: () => import('src/getter-setter-other/getter-setter-other.module').then(m => m.GSOModule)},
  {path: 'dtl', loadChildren: () => import('src/date-table-loop/date-table-loop.module').then(m => m.DTLModule)},
  {path: 'tables', loadChildren: () => import('src/tables/tables.module').then(m => m.TablesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
