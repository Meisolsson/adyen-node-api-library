/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DragonpayDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The Dragonpay issuer value of the shopper\'s selected bank. Set this to an **id** of a Dragonpay issuer to preselect it.
    */
    'issuer': string;
    /**
    * The shopper’s email address.
    */
    'shopperEmail'?: string;
    /**
    * **dragonpay**
    */
    'type': DragonpayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DragonpayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DragonpayDetails.attributeTypeMap;
    }
}

export namespace DragonpayDetails {
    export enum TypeEnum {
        Ebanking = 'dragonpay_ebanking',
        OtcBanking = 'dragonpay_otc_banking',
        OtcNonBanking = 'dragonpay_otc_non_banking',
        OtcPhilippines = 'dragonpay_otc_philippines'
    }
}
