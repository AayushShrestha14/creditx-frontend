import { Component, OnInit } from '@angular/core';
import {RolesActionComponent} from "../../roles_permissions_modules/action-component/roles-action.component";
import {HeaderActionComponent} from "../../roles_permissions_modules/action-component/header-action/header-action.component";
import {Pageable} from "../../../../core/common/services/common-pageable";
import {TableColumnSetting} from "../../../../common_resource_modules/models/table-column-setting.model";
import {LoanConfigurationActionComponent} from "../action-component/loan-configuration-action.component";
import {LoanConfigurationHeaderActionComponent} from "../action-component/loan-configuration-header-action/loan-configuration-header-action.component";

@Component({
  selector: 'app-loan-configuration-list',
  templateUrl: './loan-configuration-list.component.html',
  styleUrls: ['./loan-configuration-list.component.scss']
})
export class LoanConfigurationListComponent implements OnInit {

  title: string = 'Loan Configuration';

  editComponentLoader = LoanConfigurationActionComponent;

  headerActionComponentLoad = LoanConfigurationHeaderActionComponent;

  page: number = 1;

  pageable: Pageable = new Pageable();

  setLoanConfigJSONDetails: TableColumnSetting[] = [
    {
      primaryKey: 'loanName',
      header: 'Loan Name',
    },
    {
      primaryKey: 'loanType',
      header: 'Loan Type',
    },
    {
      primaryKey: 'natureOfLoan',
      header: 'Nature of Loan',
    },
    {
      primaryKey: 'natureOfFinanceAssets',
      header: 'Nature of Finance Assets',
    },
    {
      primaryKey: 'categories',
      header: 'Categories',
    },    {
      primaryKey: 'loanTag',
      header: 'Loan Tag',
    },
    {
      primaryKey: 'renewable',
      header: 'Renewable',
    },
    {
      primaryKey: 'eligibilityStatus',
      header: 'Eligibility Status',
    }
  ];
  loanConfigDetails = [
    {
      id: 5,
      loanName: 'Business Overdraft',
      loanType: 'Fundable',
      natureOfLoan: 'Revolving',
      natureOfFinanceAssets: 'WorkingCapital',
      categories: 'Institution',
      loanTag: 'General',
      renewable: 'Renewable',
      eligibilityStatus: 'Enable',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.listAllLoanConfigs();
  }

  listAllLoanConfigs() {}

  changePage(page: number) {
    this.page = page;
  }

}
