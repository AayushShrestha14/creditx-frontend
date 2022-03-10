import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoanConfigurationService} from "../services/loan-configuration.service";
import {LoanConfigurationResponse} from "../models/loan-configuration-response-model";
import {ProductUtils} from "../../../../core/common/utils/product-mode.model";

@Component({
  selector: 'app-add-loan-configuration',
  templateUrl: './add-loan-configuration.component.html',
  styleUrls: ['./add-loan-configuration.component.scss']
})
export class AddLoanConfigurationComponent implements OnInit {

  @Input() model : LoanConfigurationResponse = new LoanConfigurationResponse();
  loanConfigForm: FormGroup = new FormGroup({});
  productUtil: ProductUtils = new ProductUtils();

  securityTypeEnum = [
    {value : 'Land'},
    {value : 'Vehicle'},
    {value : 'Land & Building'}
  ];
  categoryEnum = [
    {value : 'INDIVIDUAL'},
    {value : 'INSTITUTION'}
  ];
  LoanTagEnum = [
    {value : 'GENERAL'},
    {value : 'VEHICLE'},
    {value : 'FIXED_DEPOSIT'},
    {value : 'SHARE_SECURITY'},
    {value : 'MICRO_LOAN'}
  ];
  financedAssets = [
    {value : 'FixedAssets'},
    {value : 'WorkingCapital'}
  ];
  loanNature = [
    {value : 'Revolving'},
    {value : 'Terminating'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: LoanConfigurationService,
  ) { }
  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {
    this.loanConfigForm = this.formBuilder.group({
      name: [undefined],
      isFundable : [undefined],
      loanNature: [undefined],
      financedAssets: [undefined],
      collateralRequirement: [undefined],
      shortNames: [undefined],
      category: [undefined],
      interestRate: [undefined],
      loanTag: [undefined],
      loanCategory: [undefined],
      isRenewable: [undefined],
      offerLetters: [undefined],
      minimumProposedAMount: [undefined],
      securityType: [undefined],
    })

  }

  onSubmit() {
    this.service.save(this.loanConfigForm.value as LoanConfigurationResponse).subscribe(() => {
      this.model = new LoanConfigurationResponse();
      this.loanConfigForm.reset();
    }, error => {
      console.log(error);
    });
  }
}

