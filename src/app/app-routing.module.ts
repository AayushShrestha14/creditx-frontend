import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-gaurd';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./feature_modules/feature.module').then(m => m.FeatureModule),
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth_modules/auth.module').then(m => m.AuthModule),
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
