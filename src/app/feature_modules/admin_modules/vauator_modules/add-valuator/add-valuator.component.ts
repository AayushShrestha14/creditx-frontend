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
  submitted = false;
  formLabel: string = 'ADD Valuator';
  valuatorForm: FormGroup = new FormGroup({});
  provinces : Array<any> = new Array<any>();
  districts : Array<any> = new Array<any>();
  municipalities : Array<any> = new Array<any>();
  valuatingFieldEnum = [
    {value : 'Land'},
    {value : 'Vehicle'},
    {value : 'Land & Building'}
  ];

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
