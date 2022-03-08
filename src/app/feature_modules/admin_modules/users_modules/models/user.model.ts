import {SbBaseModel} from "../../../../common_resource_modules/models/sb-base.model";

export class UserModel extends SbBaseModel {
  name: string | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  signatureImage: string | undefined;
  profilePicture: string | undefined;
  status!: any | undefined;
}
