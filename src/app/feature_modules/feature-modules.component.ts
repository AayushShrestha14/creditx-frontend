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

    this.menus.push(dashboard, customer);
  }

  
}
