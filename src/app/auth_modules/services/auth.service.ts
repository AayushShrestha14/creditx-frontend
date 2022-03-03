import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const body = new HttpParams()
    .set('username', username)
    .set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.httpClient.post<any>(`${ApiConfig.login}`, body.toString(), {headers}).pipe(
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
