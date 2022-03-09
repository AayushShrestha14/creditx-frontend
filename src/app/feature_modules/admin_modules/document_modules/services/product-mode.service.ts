import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ApiUtils} from "../../../../core/utils/api-utils/api-utils";
import {LocalStorageUtil} from "../../../../core/utils/local-storage-util";
import {Status} from "../model/Status";
import {BaseApiService} from "../../../../core/common/services/base-api.service";
import {SharedService} from "../../../../core/common/services/shared.service";


@Injectable({
    providedIn: 'root'
})
export class ProductModeService extends BaseApiService<ProductMode> {

    static URL = 'v1/product-mode';

    constructor(protected readonly http: HttpClient, protected override sharedService: SharedService) {
        super(http, sharedService);
    }

    public isProductEnable(productName: string): boolean {
        const productMode: ProductMode[] = JSON.parse(<string>LocalStorageUtil.getStorage().productMode);

        for (const pm of productMode) {
            if (pm.product === productName && pm.status === Status.ACTIVE) {
                return true;
            }
        }
        return false;
    }

    public getProductUtils() {
        const api = `${this.getApi()}`;
        const req = ApiUtils.getRequest(api);
        return this.http.get(req.url, {headers: req.header});
    }

    public getBankUtils() {
        const api = `${this.getApi()}/bankUtils`;
        const req = ApiUtils.getRequest(api);
        return this.http.get(req.url, {headers: req.header});
    }

    protected getApi(): string {
        return ProductModeService.URL;
    }
}

export class ProductMode {
    product: string | undefined;
    status: string | undefined;
}

export class ProductUtils {
    ACCOUNT: boolean | undefined;
    ELIGIBILITY: boolean | undefined;
    NEP_TEMPLATE: boolean | undefined;
    MEMO: boolean | undefined;
    LAS: boolean | undefined;
    OFFER_LETTER: boolean | undefined;
    DMS: boolean | undefined;
    nepTemplate: boolean | undefined;
    LOAN_APPROVAL_HIERARCHY_LEVEL: string | undefined;
    CAD_LITE_VERSION: boolean | undefined;
    CBS_ENABLE: boolean | undefined;
    FULL_CAD: boolean | undefined;
    CHECK_LIST_LITE_VERSION: boolean | undefined;
    CUSTOMER_BASE_LOAN: boolean | undefined;
    CONFIGURE_LEGAL_DOCUMENT: boolean | undefined;

}

export class BankUtils {
    AFFILIATED_ID: string | undefined;
}
