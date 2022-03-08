import {LoanCycle} from "./loanCycle";
import {DocumentCheckType} from "../enum/document-check-type.enum";

export class Document {
  id: number | undefined;
  name: string | undefined;
  displayName: string | undefined;
  url: string | undefined;
  loanCycle: Array<LoanCycle> | undefined;
  status: string | undefined;
  checked: boolean | undefined;
  checkType: DocumentCheckType | string | undefined;
  containsTemplate: boolean | undefined;
  amount: number | undefined;
  remarks: string | undefined;
  uploadedDate: Date | undefined;
}
