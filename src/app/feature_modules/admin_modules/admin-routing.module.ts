import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { PermissionConfigureComponent } from './roles_permissions_modules/permission-configure/permission-configure.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import { DocumentComponent} from "./document_modules/document/document.component";
import {ValuatorListComponent} from "./vauator_modules/valuator-list/valuator-list.component";
import {LoanConfigurationListComponent} from "./loan-configuration_modules/loan-configuration-list/loan-configuration-list.component";
import {AddLoanConfigurationComponent} from "./loan-configuration_modules/add-loan-configuration/add-loan-configuration.component";

const routes: Routes = [
  {
    path: 'branch',
    component: BranchComponent,
  },
  {
    path: 'roles_and_permissions',
    children: [
      {
        path: '', redirectTo: 'role-config', pathMatch: 'full'
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
  {
    path: 'valuator',
    component: ValuatorListComponent,
  },
  {
    path: 'loan_configuration',
    children: [
      {
        path: '',
        component:LoanConfigurationListComponent,
      },
      {path: 'add_loan_configuration', component: AddLoanConfigurationComponent},
    ]
  },
  {
    path: 'document',
    component: DocumentComponent,
  },
  {path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: 'home/dashboard', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
