import { Component, OnInit } from '@angular/core';
import {Pageable} from "../../../../core/common/services/common-pageable";
import {TableColumnSetting} from "../../../../common_resource_modules/models/table-column-setting.model";
import {LoanConfigurationActionComponent} from "../action-component/loan-configuration-action.component";
import {LoanConfigurationHeaderActionComponent} from "../action-component/loan-configuration-header-action/loan-configuration-header-action.component";
import {LoanConfigurationResponse} from "../models/loan-configuration-response-model";
import {LoanConfigurationService} from "../services/loan-configuration.service";

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

  searchObj: any ={};

  pageable: Pageable = new Pageable();

  setLoanConfigJSONDetails: TableColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Loan Name',
    },
    {
      primaryKey: 'isFundable',
      header: 'Loan Type',
    },
    {
      primaryKey: 'loanNature',
      header: 'Nature of Loan',
    },
    {
      primaryKey: 'financedAssets',
      header: 'Nature of Finance Assets',
    },
    {
      primaryKey: 'loanCategory',
      header: 'Categories',
    },
    {
      primaryKey: 'loanTag',
      header: 'Loan Tag',
    },
    {
      primaryKey: 'isRenewable',
      header: 'Renewable',
    },
    {
      primaryKey: 'enableEligibility',
      header: 'Eligibility Status',
    }
  ];

  loanConfigDetails: Array<LoanConfigurationResponse> = new Array<LoanConfigurationResponse>();

  constructor(
    private loanConfigurationService: LoanConfigurationService
  ) { }

  ngOnInit(): void {
    LoanConfigurationListComponent.listAllLoanConfigs(this);
  }

  static listAllLoanConfigs(other: LoanConfigurationListComponent) {
    other.loanConfigurationService.getPaginationWithSearchObject(other.searchObj,other.page,10).subscribe({
      next: (response) => {
        console.log('res', response);
        other.loanConfigDetails = response.detail.content;

      },
      error: (error) =>{},
      complete: () => {}
    });
  }

  changePage(page: number) {
    this.page = page;
    LoanConfigurationListComponent.listAllLoanConfigs(this);
  }

}
