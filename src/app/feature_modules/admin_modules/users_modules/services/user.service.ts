import { Injectable } from '@angular/core';
import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {SharedService} from "../../../../core/common/services/shared.service";
import {Observable, throwError } from "rxjs";
import {ApiUtils} from "../../../../core/utils/api-utils/api-utils";
import {catchError, delay, map, throwIfEmpty } from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<any> {
  static API = 'user';

  constructor(
    readonly http: HttpClient,
    override readonly sharedService: SharedService
  ) {
    super(http, sharedService);
  }

  protected getApi(): string {
    return UserService.API;
  }

  public getUserList(showMessage: boolean): Observable<any> {
    const api = `${this.getApi()}/all`;
    const req = ApiUtils.getRequest(api);
    return this.http.get<any>(req.url).pipe(
      delay(1500),
      map((res: Response) => {
         console.log('res: ', res);
        if (showMessage) {
          this.sharedService.getHttpSuccessResponseMessage(res);
        }
        return res;
      }),
      catchError((error:any) => {
         console.log(error.error);
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error.error);
      })
    );
  }

  public getUsersByRole(roles: any): Observable<any> {
    const api = `${this.getApi()}/listByRole`;
    const req = ApiUtils.getRequest(api);

    return this.http.post(req.url, roles, {headers: req.header});
  }

  public getRoles(): Observable<any> {
    const api = `${this.getApi()}/listRole`;
    const req = ApiUtils.getRequest(api);

    return this.http.get(req.url, {headers: req.header});
  }

}
