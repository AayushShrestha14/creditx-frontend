import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import { ThemeModule } from 'src/app/theme_modules/theme.module';
import { CommonResourceModule } from 'src/app/common_resource_modules/common-resource.module';
import { HeaderActionComponent } from './roles_permissions_modules/action-component/header-action/header-action.component';
import { RolesActionComponent } from './roles_permissions_modules/action-component/table-action/roles-action.component';
import { ValuatorListComponent } from './vauator_modules/valuator-list/valuator-list.component';
import { TableActionComponent } from './vauator_modules/action-component/table-action/table-action.component';
import { ValuatorHeaderActionComponent } from './vauator_modules/action-component/header-action/header-action.component';


@NgModule({
  declarations: [
    BranchComponent,
    RolesPermissionsListComponent,
    RolesActionComponent,
    HeaderActionComponent,
    ValuatorListComponent,
    TableActionComponent,
    ValuatorHeaderActionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule.forChild(),
    CommonResourceModule
  ],
  exports: [
    RolesActionComponent,
    HeaderActionComponent,
    TableActionComponent,
    ValuatorHeaderActionComponent,
  ]
})
export class AdminModule { }
