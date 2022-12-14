import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BranchComponent } from './branch_modules/branch/branch.component';
import { RolesPermissionsListComponent } from './roles_permissions_modules/roles-permissions-list/roles-permissions-list.component';
import { ThemeModule } from 'src/app/theme_modules/theme.module';
import { DocumentComponent } from './document_modules/document/document.component';
import { UpdateDocumentComponent } from './document_modules/document/update-document/update-document.component';
import { CommonResourceModule } from 'src/app/common_resource_modules/common-resource.module';
import { HeaderActionComponent } from './roles_permissions_modules/action-component/header-action/header-action.component';
import {LoanConfigurationListComponent} from "./loan-configuration_modules/loan-configuration-list/loan-configuration-list.component";
import { LoanConfigurationActionComponent } from './loan-configuration_modules/action-component/loan-configuration-action.component';
import { LoanConfigurationHeaderActionComponent } from './loan-configuration_modules/action-component/loan-configuration-header-action/loan-configuration-header-action.component';
import { AddLoanConfigurationComponent } from './loan-configuration_modules/add-loan-configuration/add-loan-configuration.component';

import { RolesActionComponent } from './roles_permissions_modules/action-component/table-action/roles-action.component';
import {DocumentFormComponent} from "./document_modules/document/document-form/document-form.component";

import { PermissionConfigureComponent } from './roles_permissions_modules/permission-configure/permission-configure.component';
import { ValuatorListComponent } from './vauator_modules/valuator-list/valuator-list.component';
import { TableActionComponent } from './vauator_modules/action-component/table-action/table-action.component';
import { ValuatorHeaderActionComponent } from './vauator_modules/action-component/header-action/header-action.component';
import { AddRoleComponent } from './roles_permissions_modules/add-role/add-role.component';
import { UserComponent} from "./users_modules/user-list/user.component";
import { UserFormComponent } from './users_modules/user-form/user-form.component';
import { UserEditComponent } from './users_modules/user-edit/user-edit.component';
import { AddValuatorComponent } from './vauator_modules/add-valuator/add-valuator.component';

import {ApprovalLimitComponent} from "./loan_approval_modules/approvallimit/approval-limit.component";
import {ApprovalLimitFormComponent} from "./loan_approval_modules/approvallimit/approval-limit-form/approval-limit-form.component";

@NgModule({
  declarations: [
    BranchComponent,
    RolesPermissionsListComponent,
    DocumentComponent,
    DocumentFormComponent,
    UpdateDocumentComponent,
    RolesPermissionsListComponent,
    RolesActionComponent,
    UserComponent,
    LoanConfigurationListComponent,
    LoanConfigurationActionComponent,
    LoanConfigurationHeaderActionComponent,
    AddLoanConfigurationComponent,
    HeaderActionComponent,
    ValuatorListComponent,
    TableActionComponent,
    ValuatorHeaderActionComponent,
    AddValuatorComponent,
    ApprovalLimitComponent,
    ApprovalLimitFormComponent,
    AddRoleComponent,
    UserFormComponent,
    PermissionConfigureComponent,
    UserEditComponent,
    AddValuatorComponent
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
