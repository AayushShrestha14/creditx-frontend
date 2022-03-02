import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, catchError, throwError } from 'rxjs';
import { SharedService } from 'src/app/core/common/services/shared.service';
import { ApiConfig } from 'src/app/core/utils/api-utils/api-config';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    // private sharedService: SharedService
  ) {}

  authenticate(
    username: string,
    password: string,
    showMessage?: boolean
  ): Observable<any> {
    let loginData = new LoginModel();
    loginData.username = username;
    loginData.password = password;

    return this.httpClient.post<any>(`${ApiConfig.login}`, loginData).pipe(
      delay(1500),
      map((res: Response) => {
        if (showMessage) {
          // this.sharedService.getHttpSuccessResponseMessage(res);
        }
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        // this.sharedService.getServerErrorMessage(error.error);
        return throwError(error);
      })
    );
  }
}
