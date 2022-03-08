import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.scss']
})
export class ValuatorHeaderActionComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onNewAdd() {
   this.router.navigate(['/home/admin_modules/valuator/add_valuator'])
  }
}
