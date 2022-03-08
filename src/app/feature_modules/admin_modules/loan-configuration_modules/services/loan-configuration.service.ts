import { Injectable } from '@angular/core';
import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../../../core/common/services/shared.service";

@Injectable({
  providedIn: 'root'
})
export class LoanConfigurationService extends BaseApiService<any>{

  static API = 'admin/loan-configs';

  constructor(
    override readonly httpClient: HttpClient,
    override readonly sharedService: SharedService
  ) {
    super(httpClient, sharedService);
}

protected getApi(): string{
    return LoanConfigurationService.API;
}

}
