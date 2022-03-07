import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import { ThemeModule } from 'src/app/theme_modules/theme.module';
import { LoanConfigurationListComponent } from './loan-configuration_modules/loan-configuration-list/loan-configuration-list.component';


@NgModule({
  declarations: [
    BranchComponent,
    RolesPermissionsListComponent,
    LoanConfigurationListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule.forChild()
  ]
})
export class AdminModule { }
