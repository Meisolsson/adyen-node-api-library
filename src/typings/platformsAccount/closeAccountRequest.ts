/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CloseAccountRequest {
    /**
    * The code of account to be closed.
    */
    'accountCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CloseAccountRequest.attributeTypeMap;
    }
}

