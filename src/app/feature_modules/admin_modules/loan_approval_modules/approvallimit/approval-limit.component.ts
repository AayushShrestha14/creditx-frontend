import {Component, Input, OnInit} from '@angular/core';

import {Pageable} from "../../../../core/common/services/common-pageable";
import {ApprovalLimit} from "../modal/approval-limit";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import {BreadcrumbService} from '../../../../@theme/components/breadcrum/breadcrumb.service';
import {ModalUtils} from "../../document_modules/model/ModalUtils";
import {Alert, AlertType} from "../../../../core/common/models/Alert";
import {ApprovalLimitFormComponent} from './approval-limit-form/approval-limit-form.component';
import {PaginationUtils} from "../../../../core/utils/PaginationUtils";
import {ApprovalLimitService} from './approval-limit.service';
import {PermissionService} from "../../roles_permissions_modules/services/permission.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {ObjectUtil} from "../../../../core/utils/ObjectUtil";
import {Role} from "../modal/role";
import {LoanConfig} from "../modal/loan-config";
import {RolesService} from "../../roles_permissions_modules/services/roles.service";
//import {LoanConfigService} from "../loan-config/loan-config.service";

@Component({
    selector: 'app-approval-limit',
    templateUrl: './approval-limit.component.html',
})
export class ApprovalLimitComponent implements OnInit {

    page = 1;
    title = 'ApprovalLimit';
    breadcrumb = 'ApprovalLimit > List';

    @Input()
    model: ApprovalLimit | undefined;

    dataList: Array<ApprovalLimit> = new Array<ApprovalLimit>();
    spinner = false;
    search: any = {};
    pageable: Pageable = new Pageable();
    isFilterCollapsed = true;

    activeCount: number | undefined;
    inactiveCount: number | undefined;
    permissions = [];
    viewApprovalLimit = false;
    addViewApprovalLimit = false;
    downloadCsv = false;
    filterForm: FormGroup = new FormGroup({});

    roleList: Array<Role> = new Array<Role>();
    loanList: Array<LoanConfig> | undefined;

    loanCategory = new LoanConfig();

    constructor(
        private service: ApprovalLimitService,
        private permissionService: PermissionService,
        private modalService: NgbModal,
        //private breadcrumbService: BreadcrumbService,
        //private toastService: ToastService,
        private formBuilder: FormBuilder,
        private roleService: RolesService,
       // private loanConfigService: LoanConfigService,
    ) {
    }

    static loadData(other: ApprovalLimitComponent) {
        other.spinner = true;
        other.service.getPaginationWithSearchObject(other.search, other.page, 10).subscribe((response: any) => {
            other.dataList = response.detail.content;
            other.pageable = PaginationUtils.getPageable(response.detail);
            other.spinner = false;
        }, error => {
            console.log(error);
            //const alert = new Alert(AlertType.ERROR, error.error.message);
            //other.toastService.show(alert);
            other.spinner = false;
        });
    }

    ngOnInit() {
        this.buildFilterForm();
        //this.breadcrumbService.notify(this.title);
        /*this.permissionService.getPermissionOf('APPROVAL LIMIT').subscribe((response: any) => {
            this.permissions = response.detail;
            for (let i = 0; this.permissions.length > i; i++) {
                if (this.permissions[i].type === 'ADD APPROVAL LIMIT') {
                    this.addViewApprovalLimit = true;
                }
                if (this.permissions[i].type === 'VIEW APPROVAL LIMIT') {
                    ApprovalLimitComponent.loadData(this);
                    this.viewApprovalLimit = true;
                }
                if (this.permissions[i].type === 'DOWNLOAD CSV') {
                    this.downloadCsv = true;
                }
            }
        });*/

        //Getting approval Role types from api
        this.roleService.getApprovalRoles().subscribe((response: any) => {

            this.roleList = response.detail;
        });

        //Getting Loan list from the api;
        /*this.loanConfigService.getAll().subscribe((response: any) => {
            this.loanList = response.detail;
            console.log(response.detail);
        });*/
    }

    buildFilterForm() {
        this.filterForm = this.formBuilder.group({
            loanCategory: [undefined],
            authorities: [undefined],
            loanApprovalType: [undefined]
        });
    }

    clearSearch() {
        this.buildFilterForm();
        this.isFilterCollapsed = true;
    }

    changePage(page: number) {
        this.page = page;
        ApprovalLimitComponent.loadData(this);
    }

    onSearch() {
        this.search.loanCategory = ObjectUtil.isEmpty(this.filterForm!.get('loanCategory')!.value) ? undefined :
            this.filterForm!.get('loanCategory')!.value;
        this.search.authorities = ObjectUtil.isEmpty(this.filterForm!.get('authorities')!.value) ? undefined :
            this.filterForm!.get('authorities')!.value;
        this.search.loanApprovalType = ObjectUtil.isEmpty(this.filterForm!.get('loanApprovalType')!.value) ? undefined :
            this.filterForm!.get('loanApprovalType')!.value;
        ApprovalLimitComponent.loadData(this);
    }

    add() {
        const modalRef = this.modalService.open(ApprovalLimitFormComponent, {size: 'lg'});
        modalRef.componentInstance.model = new ApprovalLimit();

        ModalUtils.resolve(modalRef.result, ApprovalLimitComponent.loadData, this);
    }

    edit(approvalLimit: ApprovalLimit) {
        const modalRef = this.modalService.open(ApprovalLimitFormComponent, {size: 'lg'});
        modalRef.componentInstance.model = approvalLimit;
        ModalUtils.resolve(modalRef.result, ApprovalLimitComponent.loadData, this);
    }
}
