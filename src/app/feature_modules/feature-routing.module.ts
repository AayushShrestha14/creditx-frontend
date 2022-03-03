import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth-gaurd';
import { DashboardComponent } from './dashboard_modules/dashboard/dashboard.component';
import { FeatureModulesComponent } from './feature-modules.component';

const routes: Routes = [
  {
    path: '', component: FeatureModulesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      
      {
        path: 'admin_modules',
        loadChildren: () => import('./admin_modules/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },

      {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
