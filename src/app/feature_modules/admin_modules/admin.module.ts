import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import { ThemeModule } from 'src/app/theme_modules/theme.module';
import { CommonResourceModule } from 'src/app/common_resource_modules/common-resource.module';
import { RolesActionComponent } from './roles_permissions_modules/action-component/roles-action.component';
import { HeaderActionComponent } from './roles_permissions_modules/action-component/header-action/header-action.component';


@NgModule({
  declarations: [
    BranchComponent,
    RolesPermissionsListComponent,
    RolesActionComponent,
    HeaderActionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule.forChild(),
    CommonResourceModule
  ], 
  exports: [
    RolesActionComponent
  ]
})
export class AdminModule { }
