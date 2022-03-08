import { Component, OnInit } from '@angular/core';
import { TableColumnSetting } from 'src/app/common_resource_modules/models/table-column-setting.model';
import { Pageable } from 'src/app/core/common/services/common-pageable';
import { HeaderActionComponent } from '../action-component/header-action/header-action.component';
import { RolesActionComponent } from '../action-component/table-action/roles-action.component';
import { RolesPermissionsResponse } from '../models/roles-permission-response.model';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-roles-permissions-list',
  templateUrl: './roles-permissions-list.component.html',
  styleUrls: ['./roles-permissions-list.component.scss']
})
export class RolesPermissionsListComponent implements OnInit {

  title: string = 'All Roles & Permissions';

  editComponentLoader = RolesActionComponent;

  headerActionComponentLoad = HeaderActionComponent;

  page: number = 1;

  pageable: Pageable = new Pageable();

  setBankJSONDetails: TableColumnSetting[] = [
    {
      primaryKey: 'roleName',
      header: 'Role Name',
    },
    {
      primaryKey: 'roleAccess',
      header: 'Role Access',
    },
    {
      primaryKey: 'roleType',
      header: 'Role Type',
    },
    {
      primaryKey: 'authorityLabel',
      header: 'Authority Label',
    },
    {
      primaryKey: 'createdBy',
      header: 'Created By',
    },
    {
      primaryKey: 'lastModifiedBy',
      header: 'Last Modified By',
    }
  ];

  rolesPermissionsResponse: Array<RolesPermissionsResponse> = new Array<RolesPermissionsResponse>();

  constructor(
    private rolesService: RolesService,
  ) { }

  ngOnInit(): void {
    this.allRoleList();
  }

  allRoleList() {
    this.rolesService.getAll().subscribe({
      next: (response) => {
        console.log(response);
        this.rolesPermissionsResponse = response?.detail;
      },
      error: (error) => {},
      complete: () => {}
    });
  }

  changePage(page: number) {
    this.page = page;
    this.allRoleList();
  }

}
