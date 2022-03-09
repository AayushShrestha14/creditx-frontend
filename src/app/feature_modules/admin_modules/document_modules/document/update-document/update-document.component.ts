import {Component, Input, OnInit} from '@angular/core';
import {LoanCycle} from "../../model/loanCycle";
import {Document} from "../../model/document";
import {Router} from '@angular/router';
import {DocumentService} from "../../services/document.service";
//import {ToastService} from '../../../../../@core/utils';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Status} from "../../model/Status";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html'
})
export class UpdateDocumentComponent implements OnInit {

  @Input() public cycle: any;
  title: string | undefined;
  selectedDocuments: Array<Document> | undefined;
  availableDocumentOptions = [];
  show = false;
  loanCycle: LoanCycle = new LoanCycle();
  selectedDocumentList = Array<number>();
  label: string | undefined;
  spinner = false;
  checkAll: boolean | undefined;
  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private service: DocumentService,
    private modalService: NgbModal,
    //private toastService: ToastService,
    private formBuilder: FormBuilder
  ) {
  }

  static loadData(other: UpdateDocumentComponent) {
    other.spinner = true;
    other.service.getAllByStatus(Status.ACTIVE).subscribe((response: any) => {
      other.availableDocumentOptions = response.detail;
      other.spinner = false;
      other.initializeOptions();
      other.populateOptionValues(other.loanCycle.id!);
    }, (error: any) => {
      console.log(error);
      //other.toastService.show(new Alert(AlertType.ERROR, 'Unable to Update Documents'));
    });
  }

  ngOnInit() {
    this.loanCycle = this.cycle;
    this.title = this.loanCycle.cycle;
    this.label = this.loanCycle.label;
    UpdateDocumentComponent.loadData(this);
  }

  initializeOptions() {
    this.form = this.formBuilder.group({});

    this.availableDocumentOptions.forEach((d: any) => {
      const control = new FormControl(0);
      this.form.addControl(d.name, control);
    });
  }

  populateOptionValues(loanCycleId: number) {
    this.service.getByLoanCycleAndStatus(loanCycleId, 'ACTIVE').subscribe((response: any) => {
      this.selectedDocuments = response.detail;
      this.selectedDocuments?.forEach(document => {
        this.form.get(document.name!)?.setValue(true);
      });
    });
  }

  unSelectAll($event: any) {
    this.checkAll = false;
    this.nbUpdateCheckbBox();
    this.silentSave();
  }

  selectAll($event: any) {
    this.checkAll = true;
    this.nbUpdateCheckbBox();
    this.silentSave();
  }

  nbUpdateCheckbBox() {
    this.availableDocumentOptions.forEach((d: any) => {
      this.form.get(d.name)?.setValue(this.checkAll);
    });
  }

  silentSave() {
    const selectedDocumentValues: any[] = [];
    this.spinner = true;
    this.availableDocumentOptions.forEach((d: any) => {
      if (this.form.value[d.name] === true) {
        selectedDocumentValues.push(d.id);
      }
    });
    this.service.updateDocumentByLoanCycle(this.loanCycle.id!, selectedDocumentValues)
      .subscribe(() => {
        this.router.navigate([this.router.url]);
        this.spinner = false;
      }, (error: any) => {
        console.log(error);
        //this.toastService.show(new Alert(AlertType.ERROR, 'Unable to Update Document Loan Cycle'));
      });
  }


  save() {
    const selectedDocumentValues: any[] = [];
    this.spinner = true;
    this.availableDocumentOptions.forEach((d: any) => {
      if (this.form.value[d.name] === true) {
        selectedDocumentValues.push(d.id);
      }
    });
    this.service.updateDocumentByLoanCycle(this.loanCycle.id!, selectedDocumentValues)
      .subscribe(() => {
        //this.toastService.show(new Alert(AlertType.SUCCESS, 'Successfully Updated Document Loan Cycle'));
        this.router.navigate([this.router.url]);
        this.spinner = false;
      }, (error: any) => {
        console.log(error);
        //this.toastService.show(new Alert(AlertType.ERROR, 'Unable to Update Document Loan Cycle'));
      });
  }
}
