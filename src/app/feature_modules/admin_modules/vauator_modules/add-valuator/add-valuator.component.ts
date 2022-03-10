import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValuatorResponse} from "../models/valuator-response.model";
import {ValuatorService} from "../services/valuator.service";
import {ValuatingType} from "../../../../core/enums/valuating-type";
import {Router} from "@angular/router";

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
  valuatorFieldModel: any;
  valuatingFieldEnum = ValuatingType;
  constructor(
    private activeModal: NgbModal,
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private service: ValuatorService,
    private router: Router
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
    this.submitted = true;
    if (this.valuatorForm.invalid) {
      this.scrollToFirstInvalidControl();
      return;
    }
    this.model = this.valuatorForm.value;
    this.model.valuatingFields = this.valuatorForm.value.valuatingField;
    this.service.save(this.model).subscribe( {
      next: (response) => {
        if (this.model.id == null) {
          this.model = new ValuatorResponse();
          this.router.navigate(['/home/admin_modules/valuator'])
        } else {
          this.model = new ValuatorResponse();
          this.router.navigate(['/home/admin_modules/valuator'])
        }
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/home/admin_modules/valuator'])
      },
      complete: () => {}
      }
    );
  }

  scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
      'form .ng-invalid'
    );
    window.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: 'smooth'
    });
    firstInvalidControl.focus();
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }

  addCustomValuatingField(tag: string) {
    return tag;
  }

}
