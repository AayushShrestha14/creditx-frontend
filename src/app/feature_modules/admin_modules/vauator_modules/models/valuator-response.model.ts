import { SbBaseModel } from 'src/app/common_resource_modules/models/sb-base.model';

export class ValuatorResponse extends SbBaseModel {
  name: string | undefined;
  province: string | undefined;
  district: string | undefined;
  municipalityVdc: string | undefined;
  streetName: string | undefined;
  wardNumber: number | undefined;
  contactNo: string | undefined;
  email: string | undefined;
  branch: string | undefined;
  valuatingField: string | undefined;
  bankAssociateDate: Date | undefined;
  minAmount: string | undefined;
  maxAmount: string | undefined;
  status: string | undefined;
  state: string | undefined;
}
