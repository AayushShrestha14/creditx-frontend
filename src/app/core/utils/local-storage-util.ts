import { ObjectUtil } from './ObjectUtil';
import { CryptoJsUtil } from './crypto-js-util';
import { environment } from '../../../environments/environment';
import { NbMenuItem } from '@nebular/theme';

export class LocalStorageUtil {
  /**
   * @description
   * Get an instance of LocalStorage.
   */
  public static getStorage(): LocalStorage {
    return ObjectUtil.isEmpty(
      localStorage.getItem(environment.LOCAL_STORAGE_NAME)
    )
      ? new LocalStorage()
      : JSON.parse(
          CryptoJsUtil.decrypt(
            localStorage.getItem(environment.LOCAL_STORAGE_NAME)
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
      environment.LOCAL_STORAGE_NAME,
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
  roleName: string | undefined;
  roleType: string | undefined;
  roleAccess: string | undefined;
  userId: string | undefined;
  userFullName: string | undefined;
  userProfilePicture: string | undefined;
  roleId: string | undefined;
  productMode: string | undefined;
  menus: NbMenuItem[] = Array<NbMenuItem>();
}