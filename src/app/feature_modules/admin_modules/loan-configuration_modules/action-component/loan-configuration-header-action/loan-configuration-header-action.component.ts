import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-action',
  templateUrl: './loan-configuration-header-action.component.html',
  styleUrls: ['./loan-configuration-header-action.component.scss']
})
export class LoanConfigurationHeaderActionComponent implements OnInit {

  constructor(
    private router: Router

  ) {}

  ngOnInit(): void {
  }

  onNewAdd() {
      this.router.navigate(['/home/admin_modules/loan_configuration/add_loan_configuration']); }
}
