import { Component, OnInit } from '@angular/core';
import {TableActionComponent} from "../action-component/table-action/table-action.component";
import {ValuatorHeaderActionComponent} from "../action-component/header-action/header-action.component";
import {Pageable} from "../../../../core/common/services/common-pageable";
import {TableColumnSetting} from "../../../../common_resource_modules/models/table-column-setting.model";
import {ValuatorResponse} from "../models/valuator-response.model";
import {ValuatorService} from "../services/valuator.service";
import {PaginationUtils} from "../../../../core/utils/PaginationUtils";

@Component({
  selector: 'app-valuator-list',
  templateUrl: './valuator-list.component.html',
  styleUrls: ['./valuator-list.component.scss']
})
export class ValuatorListComponent implements OnInit {
  title: string = 'All Valuator List'

  editComponentLoader = TableActionComponent

  headerActionComponentLoad = ValuatorHeaderActionComponent

  page: number = 1;

  countResponse: any ={
    totalRecords: 0,
    totalActive: 0,
    totalInactive: 0
  }

  pageable: Pageable = new Pageable();

  setValuatorJSONDetails: TableColumnSetting[] = [
    {
      primaryKey: 'name',
      header: 'Valuator Name',
    },
    {
      primaryKey: 'district',
      header: 'Address',
    },
    {
      primaryKey: 'contactNo',
      header: 'Contact Number',
    },
    {
      primaryKey: 'email',
      header: 'Email',
    },
    {
      primaryKey: 'branch',
      header: 'Branches',
    },
    {
      primaryKey: 'valuatingFields',
      header: 'Valuating Type',
    },
    {
      primaryKey: 'bankAssociateDate',
      header: 'Bank Associate Date',
    },
    {
      primaryKey: 'minAmount',
      header: 'Minimum Amount',
    },
    {
      primaryKey: 'maxAmount',
      header: 'Maximum Amount',
    },
    {
      primaryKey: 'status',
      header: 'Status',
    },
  ]

  valuatorResponse: Array<ValuatorResponse> = new Array<ValuatorResponse>();
  search = {
    name: undefined,
    branchIds: undefined,
    status: undefined,
    valuatingField: undefined,
    minAmount: undefined,
    maxAmount: undefined
  };
  constructor(
    private valuatorService: ValuatorService
  ) { }

  ngOnInit(): void {
    this.allValuatorList();

    this.valuatorService.getStatus().subscribe((response: any)=> {
      this.countResponse.totalActive = response.detail.active;
      this.countResponse.totalInactive = response.detail.inactive;
      this.countResponse.totalRecords = response.detail.valuators;
    })
  }

  allValuatorList() {
    this.valuatorService.getPaginationWithSearchObject(this.search, this.page, 10).subscribe({
      next: (response) => {
        this.valuatorResponse = response.detail.content;
        this.pageable = PaginationUtils.getPageable(response.detail);
        },
      error: (error) => {
        console.log('error', error)
      },
      complete: () => {}
    })
  }

  changePage(page: number) {
    this.page = page
    this.allValuatorList();
  }

}
