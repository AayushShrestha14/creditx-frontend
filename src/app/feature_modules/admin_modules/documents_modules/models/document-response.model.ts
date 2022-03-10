import {SbBaseModel} from "../../../../common_resource_modules/models/sb-base.model";

export class Document extends SbBaseModel{
  name: string | undefined;
  displayName: string | undefined;
  url: string | undefined;
  status: string | undefined;
  checked: boolean = false;
  containsTemplate: boolean = false;
  amount: number | undefined;
  remarks: string | undefined;
  uploadedDate: Date | undefined;
}
