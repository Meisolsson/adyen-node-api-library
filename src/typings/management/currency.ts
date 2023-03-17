/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Currency {
    /**
    * Surcharge amount per transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'amount'?: number;
    /**
    * Three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, **AUD**.
    */
    'currencyCode': string;
    'percentage'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return Currency.attributeTypeMap;
    }
}

