import { ObjectUtil } from './ObjectUtil';
import { CryptoJsUtil } from './crypto-js-util';
import { environment } from '../../../environments/environment';
import { NbMenuItem } from '@nebular/theme';
import { AccessRoles } from '../common/models/access-roles.model';
import {ProductUtils} from "../../feature_modules/admin_modules/document_modules/services/product-mode.service";

export class LocalStorageUtil {
  /**
   * @description
   * Get an instance of LocalStorage.
   */
  public static getStorage(): LocalStorage {
    return ObjectUtil.isEmpty(
      localStorage.getItem(environment.appConfigName)
    )
      ? new LocalStorage()
      : JSON.parse(
          CryptoJsUtil.decrypt(
            localStorage.getItem(environment.appConfigName)
          )
        );
  }

  /**
   * @param data A local storage instance to save.
   *
   * @description
   * Make sure you use LocalStorageUtil.getStorage() method before
   * to get instance of LocalStorage. Edit the instance and use
   * LocalStorageUtil.setStorage() to set in the browser's localStorage.
   */
  public static setStorage(data: LocalStorage): void {
    localStorage.setItem(
      environment.appConfigName,
      CryptoJsUtil.encrypt(JSON.stringify(data))
    );
  }

  /**
   * @description
   * Passes empty JSON to clear the storage.
   */
  public static clearStorage(): void {
    LocalStorageUtil.setStorage(new LocalStorage());
  }
}

export class LocalStorage {
  at: string | undefined;
  rt: string | undefined;
  ty: string | undefined;
  et: string | undefined;
  username: string | undefined;
  // roleName: string | undefined;
  // roleType: string | undefined;
  // roleAccess: string | undefined;
  userId: string | undefined;
  userFullName: string | undefined;
  userProfilePicture: string | undefined;
  // roleId: string | undefined;
  // productMode: string | undefined;

  roles: AccessRoles[] = Array<AccessRoles>();
  menus: NbMenuItem[] = Array<NbMenuItem>();
  productMode: string | undefined;
  productUtil: ProductUtils | undefined;
}
