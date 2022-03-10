import {SbBaseModel} from '../../../../common_resource_modules/models/sb-base.model';

export class LoanConfigurationResponse extends SbBaseModel {
  name: string | undefined;
  isFundable: boolean = false;
  loanNature: string | undefined;
  financedAssets: string | undefined;
  collateralRequirement: number | undefined;
  loanCategory: string | undefined;
  interestRate: number | undefined;
  loanTag: number | undefined;
  isRenewable: boolean = false;
  offerLetters: Array<any> = new Array<any>();
  minimumProposedAmount: number | undefined;
  shortNames: string | undefined;
  securityType: string | undefined;
  status: string | undefined;
}
