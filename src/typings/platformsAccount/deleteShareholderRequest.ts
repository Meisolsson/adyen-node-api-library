/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DeleteShareholderRequest {
    /**
    * The code of the Account Holder from which to delete the Shareholders.
    */
    'accountHolderCode': string;
    /**
    * The code(s) of the Shareholders to be deleted.
    */
    'shareholderCodes': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "shareholderCodes",
            "baseName": "shareholderCodes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return DeleteShareholderRequest.attributeTypeMap;
    }
}

