import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/home/home.module').then(m => m.HomeModule)},
  {path: 'abstract', loadChildren: () => import('src/abstract/abstract.module').then(m => m.AbstractModule)},
  {path: 'gso', loadChildren: () => import('src/getter-setter-other/getter-setter-other.module').then(m => m.GSOModule)},
  {path: 'dtl', loadChildren: () => import('src/date-table-loop/date-table-loop.module').then(m => m.DTLModule)},
  {path: 'tables', loadChildren: () => import('src/tables/tables.module').then(m => m.TablesModule)},
  {path: 'loops', loadChildren: () => import('src/loop-pure/lp.module').then(m => m.LPModule)},
  {path: 'tis', loadChildren: () => import('src/triple-i-switch/tis.module').then(m => m.TisModule)},
  {path: 'immut', loadChildren: () => import('src/immut/immut.module').then(m => m.ImmutModule)},
  {path: 'asynchro', loadChildren: () => import('src/asynchro/asynchro.module').then(m => m.AsynchroModule)},
  {path: 'rxjs', loadChildren: () => import('src/rxjs/rxjs.module').then(m => m.RxjsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
