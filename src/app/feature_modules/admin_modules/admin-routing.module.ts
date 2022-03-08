import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import {ValuatorListComponent} from "./vauator_modules/valuator-list/valuator-list.component";

const routes: Routes = [
  {
    path: 'branch',
    component: BranchComponent,
  },
  {
    path: 'roles_and_permissions',
    component: RolesPermissionsListComponent,
  },
  {
    path: 'valuator',
    component: ValuatorListComponent,
  },
  {path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: 'home/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
