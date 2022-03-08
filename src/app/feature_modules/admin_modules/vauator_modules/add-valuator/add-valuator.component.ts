import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ObjectUtil} from "../../../../core/utils/ObjectUtil";
import {ValuatorResponse} from "../models/valuator-response.model";

@Component({
  selector: 'app-add-valuator',
  templateUrl: './add-valuator.component.html',
  styleUrls: ['./add-valuator.component.scss']
})
export class AddValuatorComponent implements OnInit {
  @Input() model: ValuatorResponse = new ValuatorResponse();
  spinner = false;
  submitted = false;
  formLabel: string = 'ADD';
  placeHolderValuatingType: string = 'Select Valuating Type';
  placeHolderBranchSelect: string = 'Select Branches';
  valuatorForm: FormGroup = new FormGroup({});

  constructor(
    private activeModal: NgbModal,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.valuatorForm = this.formBuilder.group({
      name: [undefined],
      contactNo: [undefined],
      email: [undefined],
      province: [undefined],
      district: [undefined],
      municipalityVdc: [undefined],
      streetName: [undefined],
      wardNumber: [undefined],
      valuatingField: [undefined],
      bankAssociateDate: [undefined],
      minAmount: [undefined],
      maxAmount: [undefined],
      branch: [undefined],
      inactiveComment: [undefined],
      status: [undefined],
      state: [undefined],
      isAllBranch: [undefined],
     /* name: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.name)) ? undefined :
        this.model.name, [Validators.required]],
      contactNo: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.contactNo)) ? undefined :
        this.model.contactNo, [Validators.required]],
      email: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.email)) ? undefined :
        this.model.email, [Validators.required, Validators.email]],
      province: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.province)) ? undefined :
        this.model.province, [Validators.required]],
      district: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.district)) ? undefined :
        this.model.district, [Validators.required]],
      municipalityVdc: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.municipalityVdc)) ? undefined :
        this.model.municipalityVdc, [Validators.required]],
      streetName: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.streetName)) ? undefined :
        this.model.streetName, [Validators.required]],
      wardNumber: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.wardNumber)) ? undefined :
        this.model.wardNumber, [Validators.required, Validators.min(0)]],
      valuatingField: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.valuatingField)) ? undefined :
        this.model.valuatingField, [Validators.required]],
      bankAssociateDate: [undefined],
      minAmount: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.minAmount)) ? undefined :
        this.model.minAmount, [Validators.required, Validators.min(0)]],
      maxAmount: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.maxAmount)) ? undefined :
        this.model.maxAmount, [Validators.required, Validators.min(0)]],
      branch: [undefined, [Validators.required]],
      status: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.status)) ? undefined :
        this.model.status],
      state: [(ObjectUtil.isEmpty(this.model)
        || ObjectUtil.isEmpty(this.model.state)) ? undefined :
        this.model.state],*/
    });
  }

  formatDate(date: Date) {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2);
  }

  get valuatorFormControl() {
    return this.valuatorForm.controls;
  }

  onClose() {
    console.log('closed!!');
    this.activeModal.dismissAll(AddValuatorComponent);
  }

  onSubmit() {
    console.log('hurray!, submitted!!')
  }

}
