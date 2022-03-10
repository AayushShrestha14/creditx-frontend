import { Injectable } from '@angular/core';
import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../../../core/common/services/shared.service";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends BaseApiService<Document>{

  static API = 'admin/loan-configs/{loanConfigId}/applicants/{applicantId}/documents'

  constructor(
    override readonly httpClient: HttpClient,
    override readonly sharedService: SharedService) {
    super(httpClient, sharedService);
  }

  protected override getApi(): string {
    return DocumentService.API;
  }


}
