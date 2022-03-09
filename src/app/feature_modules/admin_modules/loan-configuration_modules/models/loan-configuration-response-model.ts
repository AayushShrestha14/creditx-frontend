import {SbBaseModel} from "../../../../common_resource_modules/models/sb-base.model";

export class LoanConfigurationResponse extends SbBaseModel {
  name: string | undefined;
  isFundable: boolean | undefined;
  loanNature: string | undefined;
  financeAssets: string | undefined;
  loanCategory: string | undefined;
  loanTag: number | undefined;
  isRenewable: boolean | undefined;
  enableEligibility: boolean | undefined;
}
