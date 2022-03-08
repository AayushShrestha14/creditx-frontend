import {Component, Input, OnInit} from '@angular/core';
import {LoanConfigurationResponse} from "../../loan-configuration_modules/models/loan-configuration-response-model";

@Component({
  selector: 'app-loan-configuration-action',
  templateUrl: './loan-configuration-action.component.html',
  styleUrls: ['./loan-configuration-action.component.scss']
})
export class LoanConfigurationActionComponent implements OnInit {

  @Input() responseDetails: LoanConfigurationResponse = new LoanConfigurationResponse();


  constructor() { }

  ngOnInit(): void {
  }
  onEdit() {
    console.log('on edit records: ', this.responseDetails);
  }

  onDelete(): void {
    console.log('on delete records: ', this.responseDetails);
  }
}
