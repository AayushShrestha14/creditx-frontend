import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-feature-modules',
  templateUrl: './feature-modules.component.html',
  styleUrls: ['./feature-modules.component.scss']
})
export class FeatureModulesComponent implements OnInit {
  
  menus: NbMenuItem[] = Array<NbMenuItem>();

  constructor() { }

  ngOnInit(): void {
    const dashboard = {
      title: 'Dashboard',
      link: '/home',
      icon: 'layers-outline'
    };
    const customer = {
      title: 'Customer',
      link: '/home/customers',
      icon: 'person-done-outline'
    };
    const branch = {
      title: 'Branch',
      link: '/home/admin_modules/branch',
      icon: 'person-done-outline'
    };
    const rolesAndPermissions = {
      title: 'Roles & Permissions',
      link: '/home/admin_modules/roles_and_permissions/role-config',
      icon: 'person-done-outline'
    };

    this.menus.push(dashboard, customer, branch, rolesAndPermissions);
  }

  
}
