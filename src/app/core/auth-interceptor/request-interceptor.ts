import { HttpInterceptor, HttpClient, HttpBackend, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable, catchError, throwError, tap, of, switchMap, filter, take } from "rxjs";
import { RefreshToken } from "../common/models/refresh-token.model";
import { ApiConfig } from "../utils/api-utils/api-config";
import { LocalStorageUtil, LocalStorage } from "../utils/local-storage-util";
import { ObjectUtil } from "../utils/ObjectUtil";

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {

  tokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private isTokenRefreshing = false;

  constructor(
    private httpClient: HttpClient,
    private httpBackend: HttpBackend,
    private router: Router
  ) {
    this.httpClient = new HttpClient(httpBackend);
  }

  static attachTokenIntoRequestHeader(request: HttpRequest<any>) {
    return request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + LocalStorageUtil.getStorage().at
      ),
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (ObjectUtil.isEmpty(LocalStorageUtil.getStorage().at)) {
      return next.handle(req);
    } else {
      return next.handle(RequestInterceptor.attachTokenIntoRequestHeader(req)).pipe(
        catchError((err): Observable<any> => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            console.log('token expired ... attempting refresh');
            return this.handleHttpResponseError(req, next);
          } else {
            console.log('errrrrrrrrrrrrrrrrrrrrr: ', err);
            return throwError(() => err);
          }
        })
      );
    }
  }

  getNewRefreshToken() {
    let state: RouterStateSnapshot;
    let tokenDetails: RefreshToken = new RefreshToken();
    tokenDetails.accessToken = LocalStorageUtil.getStorage().at;
    tokenDetails.refreshToken = LocalStorageUtil.getStorage().rt;
    tokenDetails.tokenType = 'Bearer';
    return this.httpClient.post(`${ApiConfig.refreshToken}`, tokenDetails, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + LocalStorageUtil.getStorage().at),}).pipe(
      tap((tokenResponse: any) => {
        const storage = LocalStorageUtil.getStorage();
        storage.at = tokenResponse.accessToken;
        storage.rt = tokenResponse.refreshToken;
        storage.ty = tokenResponse.tokenType;
        LocalStorageUtil.setStorage(storage);
      }),
      catchError((err) => {
          this.router.navigate(['/auth/login'], {
            queryParams: {redirectUrl: state.url},
          });
          LocalStorageUtil.setStorage(new LocalStorage());
        return of([]);
      })
    );
  }

  private handleHttpResponseError(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.tokenSubject.next(null);

      return this.getNewRefreshToken().pipe(
        switchMap((tokenResponse: any) => {
          this.isTokenRefreshing = false;
          this.tokenSubject.next(tokenResponse);
          return next.handle(RequestInterceptor.attachTokenIntoRequestHeader(request));
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap(() => {
          return next.handle(RequestInterceptor.attachTokenIntoRequestHeader(request));
        })
      );
    }
  }
}
