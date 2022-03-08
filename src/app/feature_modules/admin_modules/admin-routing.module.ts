import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { PermissionConfigureComponent } from './roles_permissions_modules/permission-configure/permission-configure.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';

const routes: Routes = [
  {
    path: 'branch',
    component: BranchComponent,
  },
  {
    path: 'roles_and_permissions',
    children: [
      {
        path: '',
        component: PermissionConfigureComponent,
      },
      {
        path: 'role-config',
        component: PermissionConfigureComponent,
      },
      {
        path: 'list',
        component: RolesPermissionsListComponent,
      }
    ]
  },
  {path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: 'home/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
