import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageUtil } from '../../utils/local-storage-util';
import { Alert, AlertType } from '../models/Alert';
import { ToastMessageService } from './toast-message.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  storage:LocalStorage = LocalStorageUtil.getStorage();

  constructor(
    private router: Router,
    private toastMessage: ToastMessageService
  ) {}

  /**
   * @author Paribartan Kalathoki
   * @param error
   * @returns
   *
   */
  public getServerErrorMessage(error: any) {
    console.log(error.code);
    switch (error.code) {
      case 400:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          error.message
        );
        console.error(`Bad Request: ${error.message}`);
        break;
      case 401:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          error.message
        );
        console.error(`Unauthorized: ${error.message}`);
        break;
      case 404:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          error.message
        );
        console.error(`Not Found: ${error.message}`);
        break;
      case 403:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          error.message
        );
        console.error(`Access Denied: ${error.message}`);
        break;
      case 500:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          error.message
        );
        console.error(`Internal Server Error: ${error.message}`);
        break;
      default:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.ERROR),
          `Something went wrong. Unknown Server Error: ${error.message}`
        );
        console.error(
          `Something went wrong. Unknown Server Error: ${error.message}`
        );
        break;
    }
  }

  /**
   * @author Paribartan Kalathoki
   * @param response
   * @returns
   *
   */
  getHttpSuccessResponseMessage(response: any) {
    console.log('response: ', response);
    switch (response.code) {
      case 200:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.INFO),
          response.message
        );
        console.info(`Response fetched: ${response.message}`);
        break;
      case 201:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.SUCCESS),
          response.message
        );
        console.info(`Data saved: ${response.message}`);
        break;
      case 204:
        this.toastMessage.showToastMessage(
          new Alert(AlertType.INFO),
          response.message
        );
        console.info(`Data saved: ${response.message}`);
        break;
      default:
        console.info('');
        break;
    }
  }

  /**
   * @author Paribartan Kalathoki
   * @param null
   * @returns boolean
   *
   */

  redirectTo(uri: string) {
    console.log('uri: ', uri);
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  refreshDataHavingRouterOutletNavigation(uri: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation  = 'reload';
    this.router.navigate([uri]);
  }

}
