import { Component, OnInit } from '@angular/core';
import { TableColumnSetting } from 'src/app/common_resource_modules/models/table-column-setting.model';
import { Pageable } from 'src/app/core/common/services/common-pageable';
import { HeaderActionComponent } from '../action-component/header-action/header-action.component';
import { RolesActionComponent } from '../action-component/roles-action.component';

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
      primaryKey: 'bankName',
      header: 'Bank Name',
    },
    {
      primaryKey: 'bankCode',
      header: 'Bank Code',
    }
  ];
  bankDetails = [
    {
      id: 5,
      bankName: 'Bank Name',
      bankCode: 'Bank Code',
    },
    {
      id: 10,
      bankName: 'Bank Name',
      bankCode: 'Bank Code',
    },
    {
      id: 20,
      bankName: 'Bank Name',
      bankCode: 'Bank Code',
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.allRoleList();
  }

  allRoleList() {}

  changePage(page: number) {
    this.page = page;
    this.allRoleList();
  }
  
}
