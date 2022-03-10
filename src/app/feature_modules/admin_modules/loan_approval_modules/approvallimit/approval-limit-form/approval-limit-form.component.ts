import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Role} from "../../modal/role";
import {LoanConfig} from "../../modal/loan-config";
import {ApprovalLimit} from "../../modal/approval-limit";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
//import {AlertService} from '../../../../../@theme/components/alert/alert.service';
import {Alert, AlertType} from "../../../../../core/common/models/Alert";
import {ModalResponse} from "../../../document_modules/model/ModalResponse";
import {ApprovalLimitService} from "../approval-limit.service";
//import {LoanConfigService} from '../../loan-config/loan-config.service';
import {RolesService} from "../../../roles_permissions_modules/services/roles.service";


@Component({
    selector: 'app-approval-limit-form',
    templateUrl: './approval-limit-form.component.html'
})
export class ApprovalLimitFormComponent implements OnInit, DoCheck {

    @Input()
    model: ApprovalLimit | undefined;

    task: string | undefined;
    submitted = false;
    spinner = false;
    roleList: Array<Role> | undefined;
    loanList: Array<LoanConfig> | undefined;

    loanCategory = new LoanConfig();
    authorities = new Role();

    constructor(
        private service: ApprovalLimitService,
        //private loanConfigService: LoanConfigService,
        private roleService: RolesService,
        private activeModal: NgbActiveModal,
        //private alertService: AlertService,
        //private toastService: ToastService
    ) {
    }

    ngOnInit() {
        this.roleService.getApprovalRoles().subscribe((response: any) => {

            this.roleList = response.detail;
        });

       /* this.loanConfigService.getAll().subscribe((response: any) => {

            this.loanList = response.detail;
        });*/
    }

    ngDoCheck(): void {

        if (this.model!.id == null) {
            this.task = 'Add';
        } else {
            this.task = 'Edit';
            if (this.model!.authorities != null) {
                this.authorities = this.model!.authorities;
            }
            if (this.model!.loanCategory != null) {
                this.loanCategory = this.model!.loanCategory;
            }
        }
    }

    onSubmit() {
        this.submitted = true;
        this.model!.loanCategory = this.loanCategory;
        this.model!.authorities = this.authorities;
        this.service.save(this.model!).subscribe(() => {

                if (this.model!.id == null) {
                    //this.toastService.show(new Alert(AlertType.SUCCESS, 'Successfully Created Approval Limit'));
                } else {
                    //this.toastService.show(new Alert(AlertType.SUCCESS, 'Successfully Updated Approval Limit'));
                }

                this.model = new ApprovalLimit();

                this.activeModal.close(ModalResponse.SUCCESS);


            }, (error: { error: { message: any; }; }) => {

                console.error(error);

                //const alert = new Alert(AlertType.ERROR, error.error.message);
                //this.toastService.show(alert);

                this.activeModal.dismiss(ModalResponse.SUCCESS);
            }
        );
    }

    onClose() {
        this.activeModal.dismiss(ModalResponse.CANCEL);
    }

    setApprovalType(event: any) {
        const loans = this.loanList?.filter(s => s.id === event);
        this.model!.loanApprovalType = loans![0].loanCategory;
    }
}


