import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {ApprovalLimit} from "../modal/approval-limit";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiUtils} from "../../../../core/utils/api-utils/api-utils";
import {SharedService} from "../../../../core/common/services/shared.service";

@Injectable({
    providedIn: 'root'
})
export class ApprovalLimitService extends BaseApiService<ApprovalLimit> {
    static API = 'v1/approval-limit';

    constructor(readonly http: HttpClient,
                override readonly sharedService: SharedService) {
        super(http, sharedService);
    }

    public getLimitByRoleAndLoan(id: number, loanCategory: String): Observable<any> {
        const api = `${this.getApi()}/${id}/${loanCategory}/role`;
        const req = ApiUtils.getRequest(api);
        return this.http.get(req.url, {headers: req.header});
    }

    protected getApi(): string {
        return ApprovalLimitService.API;
    }


}
