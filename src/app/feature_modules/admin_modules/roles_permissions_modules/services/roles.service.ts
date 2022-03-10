import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/core/common/services/base-api.service';
import { SharedService } from 'src/app/core/common/services/shared.service';
import {Observable} from "rxjs";
import {ApiUtils} from "../../../../core/utils/api-utils/api-utils";

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseApiService<any> {
  static API = 'admin/role';

  constructor(
    override readonly httpClient: HttpClient,
    override readonly sharedService: SharedService
  ) {
    super(httpClient, sharedService);
  }

  protected getApi(): string {
    return RolesService.API;
  }

  public getActiveRoles(): Observable<any> {
    const api = `${RolesService.API}/active`;
    const req = ApiUtils.getRequest(api);

    return this.httpClient.get(req.url, {headers: req.header});
  }

  public checkRoleContainMaker(): Observable<any> {
    const api = `${RolesService.API}/maker`;
    const req = ApiUtils.getRequest(api);

    return this.httpClient.get(req.url, {headers: req.header});
  }


  public getApprovalRoles(): Observable<any> {
    const api = `${RolesService.API}/getApproval`;
    const req = ApiUtils.getRequest(api);

    return this.httpClient.get(req.url, {headers: req.header});
  }

  public override update(obj: Object): Observable<any> {
    const api = `${RolesService.API}/edit`;
    const req = ApiUtils.getRequest(api);

    return this.httpClient.post(req.url, obj, {headers: req.header});
  }
}
