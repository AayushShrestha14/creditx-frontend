import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/core/common/services/base-api.service';
import { SharedService } from 'src/app/core/common/services/shared.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RolesPermissionService extends BaseApiService<any> {

  static API = 'admin/role';

  constructor(
    protected readonly httpClient: HttpClient,
    protected override readonly sharedService: SharedService
  ) {
    super(httpClient, sharedService);
  }

  protected getApi(): string {
    return RolesPermissionService.API;
  }

}
