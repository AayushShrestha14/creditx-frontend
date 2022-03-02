import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUtils } from '../../utils/api-utils/api-utils';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { SharedService } from './shared.service';

/**
 * API are expected to be developed in rest pattern
 *
 * save = POST: /v1/api_endpoint
 * update = PUT: /v1/api_endpoint{id}
 * delete = DELETE: /v1/api_endpoint/{id}
 * getAll = GET: /v1/api_endpoint/all?search -- add filter option in it
 * getPaginationWithSearchString = GET: /v1/api_endpoint?search=?page=1&size=10
 * getPaginationWithSearchObj = POST: /v1/api_endpoint/list?page=1&size=10
 */
export abstract class BaseApiService<T> {
  private obj: T | undefined;
  private objs!: T[];

  protected constructor(
    protected http: HttpClient,
    protected sharedService: SharedService
  ) {}

  protected abstract getApi(): string;

  public save(obj: T, showMessage?: boolean): Observable<any> {
    const req = ApiUtils.getRequest(this.getApi());
    
    return this.http.post<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public saveAny(obj: any, showMessage?: boolean): Observable<any> {
    const req = ApiUtils.getRequest(this.getApi());
    
    return this.http.post<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public saveAll(obj: T[], showMessage?: boolean): Observable<any> {
    const req = ApiUtils.getRequest(this.getApi());
    
    return this.http.post<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public saveWithFile(obj: T, showMessage?: boolean): Observable<any> {
    const req = ApiUtils.getRequestWithFileSupport(this.getApi());
    
    return this.http.post<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public update(obj: T, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.put<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public updateWithFile(id: number, obj: T, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/${id}`;
    const req = ApiUtils.getRequestWithFileSupport(api);
    
    return this.http.put<T>(req.url, obj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public detail(id: any, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/detail`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, {uriId: id}).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getDetailById(id: any, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/select`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, {uriId: id}).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public detailCustom(req: { url: string; }, showMessage?: boolean): Observable<any> {
    
    return this.http.get<T>(req.url).pipe(
      map((res: T) => {
        if (showMessage) {
          this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getOneWithSearch(searchObj: any, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/one`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, searchObj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public delete(id: number, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/delete`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, {uriId: id}).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getAll(showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/all`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.get<any>(req.url).pipe(
      delay(1500),
      map((res: T) => {
        console.log('res: ', res);
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error: any) => {
        console.log(error.error);
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(error.error);
      })
    );
  }

  public getAllWithSearch(searchObj: any, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/all`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, searchObj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getPaginationWithSearch(
    search: string,
    page: number = 1,
    size: number = 20,
    showMessage?: boolean
  ): Observable<any> {
    let api: string;
    if (search === null || search === undefined) {
      api = `${this.getApi()}?page=${page}&size=${size}`;
    } else {
      api = `${this.getApi()}?page=${page}&&size=${size}&${search}`;
    }
    const req = ApiUtils.getRequest(api);
    
    return this.http.get(req.url).pipe(
      tap(
        (res: any) => {
            if (showMessage) {
                this.sharedService.getHttpSuccessResponseMessage(res);
            }
            
          return res;
        },
        catchError((error) => {
          
          this.sharedService.getServerErrorMessage(error.error);
          return throwError(() => error);
        })
      )
    );
  }

  public getPaginationWithSearchObject(
    searchObj: any,
    page: number = 1,
    size: number = 20,
    showMessage?: boolean,
    showSpinner: boolean = true
  ) {
    const api = `${this.getApi()}/list?page=${page}&size=${size}`;
    const req = ApiUtils.getRequest(api);
    if(showSpinner) 
    return this.http.post<any>(req.url, searchObj).pipe(
      map((res: any) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public download(searchObj: Object, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/csv`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, searchObj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getStatus(showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/statusCount`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.get<T>(req.url).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getListWithSearchObject(searchObj: any, showMessage?: boolean): Observable<any> {
    const api = `${this.getApi()}/list/filtered`;
    const req = ApiUtils.getRequest(api);
    
    return this.http.post<T>(req.url, searchObj).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public getCalendar(showMessage?: boolean): Observable<any> {
    const api = 'v1/calendar';
    const req = ApiUtils.getRequest(api);
    
    return this.http.get<T>(req.url).pipe(
      map((res: T) => {
        if (showMessage) {
            this.sharedService.getHttpSuccessResponseMessage(res);
        }
        
        return res;
      }),
      catchError((error) => {
        
        this.sharedService.getServerErrorMessage(error.error);
        return throwError(() => error);
      })
    );
  }

  public set(obj: T): void {
    this.obj = obj;
  }

  public get(): T | undefined {
    return this.obj;
  }

  public clear(): void {
    this.obj = undefined;
  }
}
