import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DocumentFormComponent} from "./document-form/document-form.component";
import {ModalUtils} from "../model/ModalUtils";
import {PaginationUtils} from "../../../../core/utils/PaginationUtils";
import {DocumentService} from "../services/document.service";
import {Pageable} from "../../../../core/common/services/common-pageable";
import {LoanCycle} from "../model/loanCycle";
import {ProductModeService} from "../services/product-mode.service";
import {Action} from "../model/Action";
import {Document} from "../model/document";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  activeCount: number | undefined;
  inactiveCount: number | undefined;
  documents: number | undefined;
  search: any = {};
  page = 1;
  pageable: Pageable = new Pageable();
  dataList: Array<Document> = new Array<Document>();
  loanCycleList: Array<LoanCycle> = new Array<LoanCycle>();
  showEligibility = false;
  constructor(
              private modalService: NgbModal,
              private service: DocumentService,
              private productModeService: ProductModeService,

              ) { }

  static loadData(other: DocumentComponent) {
    other.service.getStatus().subscribe((response: any) => {
      other.activeCount = response.detail.active;
      other.inactiveCount = response.detail.inactive;
      other.documents = response.detail.documents;
    });
    other.service.getPaginationWithSearchObject(other.search, other.page, 10).subscribe((response: any) => {
      other.dataList = response.detail.content;
      other.pageable = PaginationUtils.getPageable(response.detail);
    }, error => {
      console.log(error);
    });
    other.service.getAllLoanCycle().subscribe((response: any) => {
      other.loanCycleList = response.detail;
    });
    other.showEligibility = other.productModeService.isProductEnable('ELIGIBILITY');
  }

  ngOnInit(): void {
  }

  addDocument() {
    const modalRef = this.modalService.open(DocumentFormComponent);
    modalRef.componentInstance.action = Action.ADD;
    modalRef.componentInstance.model = new Document();
    ModalUtils.resolve(modalRef.result, DocumentComponent.loadData, this);
  }

  openEdit(document: Document) {
    const modalRef = this.modalService.open(DocumentFormComponent);
    modalRef.componentInstance.action = Action.UPDATE;
    modalRef.componentInstance.model = document;
    ModalUtils.resolve(modalRef.result, DocumentComponent.loadData, this);
  }

  onChange(data: any) {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    /*event.preventDefault();
    const modalRef = this.modalService.open(UpdateModalComponent, {size: 'lg'});
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.service = this.service;
    modalRef.result.then(
      close => {
        DocumentComponent.loadData(this);
      }, dismiss => {
        DocumentComponent.loadData(this);
      }
    );*/
  }
}
