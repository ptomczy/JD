import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/home/home.module').then(m => m.HomeModule)},
  {path: 'abstract', loadChildren: () => import('src/abstract/abstract.module').then(m => m.AbstractModule)},
  {path: 'di', loadChildren: () => import('src/di/di.module').then(m => m.DIModule)},
  {path: 'variables', loadChildren: () => import('src/variables/variables.module').then(m => m.VariablesModule)},
  {path: 'gso', loadChildren: () => import('src/getter-setter-other/getter-setter-other.module').then(m => m.GSOModule)},
  {path: 'dtl', loadChildren: () => import('src/date-table-loop/date-table-loop.module').then(m => m.DTLModule)},
  {path: 'tables', loadChildren: () => import('src/tables/tables.module').then(m => m.TablesModule)},
  {path: 'loops', loadChildren: () => import('src/loop-pure/lp.module').then(m => m.LPModule)},
  {path: 'tis', loadChildren: () => import('src/triple-i-switch/tis.module').then(m => m.TisModule)},
  {path: 'immut', loadChildren: () => import('src/immut/immut.module').then(m => m.ImmutModule)},
  {path: 'asynchro', loadChildren: () => import('src/asynchro/asynchro.module').then(m => m.AsynchroModule)},
  {path: 'rxjs', loadChildren: () => import('src/rxjs/rxjs.module').then(m => m.RxjsModule)},
  {path: 'moment', loadChildren: () => import('src/momentJS/mom.module').then(m => m.MomModule)},
  {path: 'lodash', loadChildren: () => import('src/ldsh/ldsh.module').then(m => m.LodashModule)},
  {path: 'pipes', loadChildren: () => import('src/angular-pipe/angular-pipe.module').then(m => m.AngularPipeModule)},
  {path: 'providers', loadChildren: () => import('src/providers/providers.module').then(m => m.ProvidersModule)},
  {path: 'viewContentChild', loadChildren: () => import('src/viewContentChild/vcc.module').then(m => m.VCCModule)},
  {path: 'angularAnimations', loadChildren: () => import('src/animations/animations.module').then(m => m.AnimationsModule)},
  {path: 'forms', loadChildren: () => import('src/forms/forms.module').then(m => m.RealFormsModule)},
  {path: 'cd', loadChildren: () => import('src/changeDetector/cd.module').then(m => m.CDModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
