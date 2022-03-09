import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ObjectUtil } from 'src/app/core/utils/ObjectUtil';
import { AddRoleComponent } from '../add-role/add-role.component';
import { ActiveRoles } from '../models/active-roles.model';
import { PermissionService } from '../services/permission.service';
import { RolesPermissionService } from '../services/roles-permission.service';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-permission-configure',
  templateUrl: './permission-configure.component.html',
  styleUrls: ['./permission-configure.component.scss']
})
export class PermissionConfigureComponent implements OnInit {
  allRoleList: Array<ActiveRoles> = new Array<ActiveRoles>();

  selectedRole: number | undefined;

  rolePermissions: Array<any> = new Array<any>();

  compareAlreadyCheckedPermission: Array<any> = new Array<any>();

  allPermissionsList: Array<any> = new Array<any>();

  rolePermissionList: Array<any> = new Array<any>();

  apiList: Array<any> = new Array<any>();

  tempRightList: Array<any> = new Array<any>();

  roleId: string | number | undefined;

  permissions: any = new Object();

  submitted: boolean = false;

  static loadData(other: PermissionConfigureComponent) {
    other.rolesService.allActiveDataList().subscribe({
      next: (data) => {
        other.allRoleList = data?.detail;
        console.log('active roles: ', data);
      },
      error: (err) => {
        console.log('error: ', err);
      },
      complete: () => {}
    });
  }

  constructor(
    private rolesPermissionService: RolesPermissionService,
    private rolesService: RolesService,
    private permissionService: PermissionService,
    private ngbModal: NgbModal,
  ) {}

  ngOnInit() {
    PermissionConfigureComponent.loadData(this);
  }

  onAddNewRole() {
    let options: NgbModalOptions = {
      backdrop: 'static', keyboard: false
    };
    const addNewRole = this.ngbModal.open(AddRoleComponent, options);
    addNewRole.result.then((data: any) => {
      console.log('data :', data);
      PermissionConfigureComponent.loadData(this);
    }, (reason: any) => {
      console.log('reason :', reason);
    });
  }

  onSelectNewRole(event: any) {
    if (ObjectUtil.isEmpty(event)) {
      this.resetToDefault();
      return;
    }
    this.roleId = event;
    this.rolePermissions = [];
    this.rolesPermissionService.detail(event).subscribe((response: any) => {
      this.rolePermissionList = response.detail;
      this.permissionService.getAll().subscribe((permissionResponse: any) => {
        this.allPermissionsList = permissionResponse.detail;
        this.checkPermission();
      });
    });
  }

  resetToDefault() {
    this.compareAlreadyCheckedPermission = new Array();
    this.allPermissionsList = new Array();
    this.checkPermission();
  }

  checkPermission() {
    this.rolePermissions = new Array();
    this.compareAlreadyCheckedPermission = new Array();
    for (let i = 0; i < this.allPermissionsList.length; i++) {
      let isMatch = false;
      for (let j = 0; j < this.rolePermissionList.length; j++) {
        if (
          this.allPermissionsList[i].id ===
          this.rolePermissionList[j].permission.id
        ) {
          isMatch = true;
          this.allPermissionsList[i].checked = true;
          this.apiList = this.allPermissionsList[i].apiList;
          this.tempRightList = this.getCheckApiRight(
            this.apiList,
            this.rolePermissionList[j].apiRights
          );
          this.allPermissionsList[i].apiRights = this.tempRightList;
          this.compareAlreadyCheckedPermission.push(this.allPermissionsList[i]);
          this.permissions = {
            id: this.rolePermissionList[j].id,
            permission: {
              id: this.rolePermissionList[j].permission.id
            },
            role: {
              id: this.roleId
            },
            lastModified: new Date(),
            del: false,
            apiRights: this.tempRightList,
            version: this.rolePermissionList[j].version
          };

          this.rolePermissions.push(this.permissions);

          break;
        }
      }
      if (!isMatch) {
        this.allPermissionsList[i].checked = false;
        this.apiList = this.allPermissionsList[i].apiList;
        this.tempRightList = this.getCheckApiRight(this.apiList, []);
        this.allPermissionsList[i].apiRights = this.tempRightList;
        this.compareAlreadyCheckedPermission.push(this.allPermissionsList[i]);
      }
    }
  }

  getCheckApiRight(tempRight: string | any[], selectedRight: string | any[]) {
    this.tempRightList = [];
    for (let x = 0; x < tempRight.length; x++) {
      let isRightMatch = false;
      for (let y = 0; y < selectedRight.length; y++) {
        if (selectedRight[y].id === tempRight[x].id) {
          isRightMatch = true;
          tempRight[x].checked = true;
          this.tempRightList.push(tempRight[y]);
          break;
        }
      }
      if (!isRightMatch) {
        tempRight[x].checked = false;
        this.tempRightList.push(tempRight[x]);
      }
    }
    return this.tempRightList;
  }

  updateCheckedOptions(events: any) {
    this.permissions = {
      id: null,
      permission: {
        id: events.value
      },
      role: {
        id: this.roleId
      },
      lastModified: new Date(),
      del: false,
      apiRights: [],
      version: null
    };

    const apiSection = document.getElementById(events?.value);

    if (events?.checked) {
      this.rolePermissions.push(this.permissions);
      apiSection?.classList.remove('hide');
      apiSection?.classList.add('show');
    } else {
      apiSection?.classList.remove('show');
      apiSection?.classList.add('hide');

      for (let i = 0; i < this.rolePermissions.length; i++) {
        if (
          this.rolePermissions[i].permission.id.toString() === events?.value
        ) {
          if (this.rolePermissions[i].id !== null) {
            this.rolePermissions[i].del = true;
            this.permissions.id = this.rolePermissions[i].id;
          } else {
            this.rolePermissions.splice(i, 1);
          }
        }
      }
    }
  }

  updateCheckapiOptions(permId: { toString: () => any }, events: any) {
    for (let i = 0; i < this.rolePermissions.length; i++) {
      if (
        this.rolePermissions[i].permission.id.toString() === permId.toString()
      ) {
        if (this.rolePermissions[i].id === null) {
          const apiUrl = {
            id: events?.value,
            checked: events?.checked
          };
          this.rolePermissions[i].apiRights.push(apiUrl);
        }

        for (let j = 0; j < this.rolePermissions[i].apiRights.length; j++) {
          if (
            this.rolePermissions[i].apiRights[j].id.toString() === events?.value
          ) {
            this.rolePermissions[i].apiRights[j].checked = events;
          }
        }
      }
    }
  }

  onSetRolesPermission() {
    this.submitted = true;
    this.rolesPermissionService.save(this.rolePermissions).subscribe({
      next: () => {
        this.submitted = false;
        this.resetToDefault();
        // this.rolePermissions = new Array();
      },
      error: () => {
        this.submitted = false;
      },
      complete: () => {
        PermissionConfigureComponent.loadData(this);
      }
    });
  }
}
