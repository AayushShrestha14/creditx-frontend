import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiUtils} from "../../../../core/utils/api-utils/api-utils";
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {SharedService} from "../../../../core/common/services/shared.service";

@Injectable({
  providedIn: 'root'
})

export class DocumentService extends BaseApiService<Document>{
  static API = 'v1/document';

  constructor(protected readonly http: HttpClient, protected shareService: SharedService){
    super(http, shareService)
  }

  protected getApi(): string {
    return DocumentService.API;
  }

  public getAllLoanCycle(): Observable<any> {
    const req = ApiUtils.getRequest(`${DocumentService.API}/lifeCycle`);

    return this.http.get(req.url, {headers: req.header});
  }

  public getByLoanCycleAndStatus(loanCycleId: number, status: string): Observable<any> {
    const req = ApiUtils.getRequest(`${DocumentService.API}/cycle/${loanCycleId}/status/${status}`);

    return this.http.get(req.url, {headers: req.header});
  }

  public updateDocumentByLoanCycle(id: number, model: any): Observable<any> {
    const req = ApiUtils.getRequest(`${DocumentService.API}/saveList?loanCycleId=${id}`);

    return this.http.post(req.url, model, {headers: req.header});
  }

  public getAllByStatus(status: String): Observable<any> {
    const req = ApiUtils.getRequest(`${DocumentService.API}/status/${status}`);

    return this.http.get(req.url, {headers: req.header});
  }

  downloadAllDoc(path: String, id: number) {
    const req = ApiUtils.getRequestWithFileSupport(`${DocumentService.API}/downloadDoc/` + id);
    return this.http.post(req.url, path, {headers: req.header});
  }
}
