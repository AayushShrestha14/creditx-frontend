import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-loan-configuration',
  templateUrl: './add-loan-configuration.component.html',
  styleUrls: ['./add-loan-configuration.component.scss']
})
export class AddLoanConfigurationComponent implements OnInit {

  loanConfigForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {
    this.loanConfigForm = this.formBuilder.group({
      name: [undefined],
      fundable : [undefined],
      loanNature: [undefined],
      financedAssets: [undefined],
      collateralrequirement: [undefined],
      shortNames: [undefined],
      category: [undefined],
      interestRate: [undefined],
      loanTag: [undefined],
      renewable: [undefined],
      offerLetters: [undefined],
      minimumProposedAmount: [undefined],
    })

  }

}
