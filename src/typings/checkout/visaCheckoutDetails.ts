/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class VisaCheckoutDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: VisaCheckoutDetails.FundingSourceEnum;
    /**
    * **visacheckout**
    */
    'type'?: VisaCheckoutDetails.TypeEnum;
    /**
    * The Visa Click to Pay Call ID value. When your shopper selects a payment and/or a shipping address from Visa Click to Pay, you will receive a Visa Click to Pay Call ID.
    */
    'visaCheckoutCallId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "VisaCheckoutDetails.FundingSourceEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VisaCheckoutDetails.TypeEnum"
        },
        {
            "name": "visaCheckoutCallId",
            "baseName": "visaCheckoutCallId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VisaCheckoutDetails.attributeTypeMap;
    }
}

export namespace VisaCheckoutDetails {
    export enum FundingSourceEnum {
        Debit = 'debit'
    }
    export enum TypeEnum {
        Visacheckout = 'visacheckout'
    }
}
