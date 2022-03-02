import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Alert, AlertType } from '../models/Alert';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  CustomProgressAnimationType: any = 'decreasing';

  constructor(private toastrService: ToastrService) {}

  public showToastMessage(alert: Alert, message: string) {
    let alertStatus = this.getStatus(alert.type);
    const options = {
      timeOut: 3000,
      easeTime: 500,
      progressBar: true,
      progressAnimation: this.CustomProgressAnimationType,
      positionClass: 'toast-bottom-right',
      closeButton: false,
    };
    console.log(alertStatus);
    switch (alertStatus) {
      case AlertType.ERROR:
        this.toastrService.error(message, AlertType.ERROR, options);
        break;
      case AlertType.SUCCESS:
        this.toastrService.success(message, AlertType.SUCCESS, options);
        break;
      case AlertType.INFO:
        this.toastrService.info(message, AlertType.INFO, options);
        break;
      case AlertType.WARNING:
        this.toastrService.warning(message, AlertType.WARNING, options);
        break;
    }
  }

  private getStatus(type: AlertType) {
    switch (type) {
      case AlertType.ERROR:
        return AlertType.ERROR;
      case AlertType.SUCCESS:
        return AlertType.SUCCESS;
      case AlertType.WARNING:
        return AlertType.WARNING;
      case AlertType.INFO:
        return AlertType.INFO;
      default:
        return 'primary';
    }
  }
}
