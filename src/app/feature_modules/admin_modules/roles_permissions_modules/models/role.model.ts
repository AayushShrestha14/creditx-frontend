import { SbBaseModel } from 'src/app/common_resource_modules/models/sb-base.model';
import { RoleTypeEnum } from 'src/app/core/enums/role-type';

export class Role extends SbBaseModel {
  roleName: string | undefined;
  status: string | undefined;
  roleType: RoleTypeEnum = RoleTypeEnum.MAKER;
  roleAccess: string | undefined;
  authorityLabel: string | undefined;
  signApprovalSheet: boolean = false;
}
