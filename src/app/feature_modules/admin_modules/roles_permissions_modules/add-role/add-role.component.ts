import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleAccessEnum } from 'src/app/core/enums/role-access';
import { RoleTypeEnum } from 'src/app/core/enums/role-type';
import { AppConfigService } from '../../common-services/app-config.service';
import { Role } from '../models/role.model';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  role: Role = new Role();

  signApprovalSheetStatus: boolean = false;

  hideRoleAccess: boolean = false;

  authorityRequired: boolean = false;

  showAuthority: boolean = true;

  showCheck: boolean = false;

  appConfigRoleType: Array<RoleTypeEnum> = new Array<RoleTypeEnum>();

  roleAccessList = RoleAccessEnum.enumObject();

  addRoleForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(
    private activeModal: NgbActiveModal,
    private appConfigService: AppConfigService,
    private formBuilder: FormBuilder,
    private rolesService: RolesService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllRoleTypes();
  }

  initForm(): void {
    this.addRoleForm = this.formBuilder.group({
      roleName: [undefined, Validators.compose([])],
      roleType: [undefined, Validators.compose([])],
      roleAccess: [undefined, Validators.compose([])],
      signApprovalSheet: [false, Validators.compose([])],
      authorityLabel: [undefined, Validators.compose([])]
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.addRoleForm.controls;
  }

  getAllRoleTypes() {
    this.appConfigService.getRoleType().subscribe((res: any) => {
      this.appConfigRoleType = res.detail;
    });
  }

  signApprovalSheet(event: any) {
    this.signApprovalSheetStatus = event.target.checked;
  }

  onCloseModal() {
    this.activeModal.close();
  }

  checkRole() {
    if (
      this.forms['roleType'].value === RoleTypeEnum.MAKER ||
      this.forms['roleType'].value === RoleTypeEnum.COMMITTEE ||
      this.forms['roleType'].value === RoleTypeEnum.ADMIN ||
      this.forms['roleType'].value === RoleTypeEnum.CAD_SUPERVISOR
    ) {
      this.hideRoleAccess = true;
      this.authorityRequired = true;
      this.showAuthority = true;
      this.role.roleAccess = RoleAccessEnum.OWN;
      if (this.forms['roleType'].value === RoleTypeEnum.COMMITTEE) {
        this.role.roleAccess = RoleAccessEnum.ALL;
      }
      if (this.forms['roleType'].value === RoleTypeEnum.CAD_SUPERVISOR) {
        this.role.roleAccess = RoleAccessEnum.SPECIFIC;
      }
      if (this.forms['roleType'].value === RoleTypeEnum.ADMIN) {
        this.role.roleAccess = RoleAccessEnum.ALL;
        this.authorityRequired = false;
        this.showAuthority = false;
      }
    } else {
      this.hideRoleAccess = false;
      this.authorityRequired = true;
      this.showAuthority = true;
      this.role.roleAccess = RoleAccessEnum.OWN;
    }

    if (
      this.forms['roleType'].value === RoleTypeEnum.CAD_SUPERVISOR ||
      this.forms['roleType'].value === RoleTypeEnum.CAD_ADMIN ||
      this.forms['roleType'].value === RoleTypeEnum.CAD_LEGAL
    ) {
      this.showAuthority = false;
    }
    if (
      this.forms['roleType'].value === RoleTypeEnum.APPROVAL ||
      this.forms['roleType'].value === RoleTypeEnum.COMMITTEE
    ) {
      this.showCheck = true;
    } else {
      this.showCheck = false;
    }
  }

  onAddNewRole() {
    console.log('data: ', this.addRoleForm.value as Role);
    if (this.addRoleForm.valid) {
      this.submitted = true;
      this.rolesService.save(this.addRoleForm.value as Role).subscribe({
        next: () => {
          this.role = new Role();
          this.addRoleForm.reset();
          this.activeModal.close('ROLE_ADDED');
        },
        error: () => {
          this.submitted = false;
        },
        complete: () => {}
      });
    }
  }
}
