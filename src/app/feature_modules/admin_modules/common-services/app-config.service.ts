import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/core/common/services/base-api.service';
import { SharedService } from 'src/app/core/common/services/shared.service';
import { ApiUtils } from 'src/app/core/utils/api-utils/api-utils';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends BaseApiService<any> {
  static API = 'admin/configuration';

  constructor(
    override readonly httpClient: HttpClient,
    override readonly sharedService: SharedService
  ) {
    super(httpClient, sharedService);
  }

  protected getApi(): string {
    return AppConfigService.API;
  }
  
  public getRoleType(): Observable<any> {
    const req = ApiUtils.getRequest(
      `${AppConfigService.API}/role-type`
    );
    return this.httpClient.get(req.url, { headers: req.header });
  }
}
