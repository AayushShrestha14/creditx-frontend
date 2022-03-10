import {LoanTemplate} from './loan-template';
import {Document} from "../../document_modules/model/document";
import {OfferLetter} from './offerLetter';

export class LoanConfig {
    id: number | undefined;
    name: string | undefined;
    interestRate: number | undefined;
    totalPoints: number | undefined;
    eligibilityPoints: number | undefined;
    isFundable: boolean | undefined;
    shortNames: string | undefined;
    financedAssets: number | undefined;
    loanNature: number | undefined;
    collateralRequirement: number | undefined;
    version: number | undefined;
    templateList: Array<LoanTemplate> | undefined;
    status: string | undefined;
    isRenewable: boolean | undefined;
    loanConfigCode: string | undefined;
    eligibilityPercentage: number | undefined;
    initial: Array<Document> | undefined;
    renew: Array<Document> | undefined;
    closure: Array<Document> | undefined;
    enhance: Array<Document> | undefined;
    partialSettlement: Array<Document> | undefined;
    fullSettlement: Array<Document> | undefined;
    eligibilityDocuments: Array<Document> | undefined;
    offerLetters: Array<OfferLetter> | undefined;
    enableEligibility: boolean | undefined;
    minimumProposedAmount: number | undefined;
    loanCategory: string | undefined;
    loanTag: string | undefined;
    approvedDocument: Array<Document> | undefined;
    renewWithEnhancement: Array<Document> | undefined;

}
