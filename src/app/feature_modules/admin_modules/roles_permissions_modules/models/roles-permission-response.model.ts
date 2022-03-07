import { SbBaseModel } from 'src/app/common_resource_modules/models/sb-base.model';

export class RolesPermissionsResponse extends SbBaseModel {
  authorityLabel: string | undefined;
  new: boolean = false;
  roleAccess: string | undefined;
  roleName: string | undefined;
  roleType: string | undefined;
  status: string | undefined;
  createdByName: string | undefined;
  modifiedByName: string | undefined;
}
