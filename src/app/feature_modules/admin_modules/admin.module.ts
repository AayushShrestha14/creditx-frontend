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
import { RolesActionComponent } from './roles_permissions_modules/action-component/table-action/roles-action.component';
import {DocumentFormComponent} from "./document_modules/document/document-form/document-form.component";


@NgModule({
  declarations: [
    BranchComponent,
    RolesPermissionsListComponent,
    DocumentComponent,
    DocumentFormComponent,
    UpdateDocumentComponent,
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
    RolesActionComponent,
    HeaderActionComponent
  ]
})
export class AdminModule { }
