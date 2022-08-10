/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { NotificationEventConfiguration } from './notificationEventConfiguration';

export class NotificationConfigurationDetails {
    /**
    * Indicates whether the notification subscription is active.
    */
    'active'?: boolean;
    /**
    * The version of the notification to which you are subscribing. To make sure that your integration can properly process the notification, subscribe to the same version as the API that you\'re using.
    */
    'apiVersion'?: number;
    /**
    * A description of the notification subscription configuration.
    */
    'description'?: string;
    /**
    * Contains objects that define event types and their subscription settings.
    */
    'eventConfigs': Array<NotificationEventConfiguration>;
    /**
    * A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.  >Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. \"b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27\").  The omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).
    */
    'hmacSignatureKey'?: string;
    /**
    * Adyen-generated ID for the entry, returned in the response when you create a notification configuration. Required when updating an existing configuration using [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).
    */
    'notificationId'?: number;
    /**
    * The password to use when accessing the notifyURL with the specified username.
    */
    'notifyPassword'?: string;
    /**
    * The URL to which the notifications are to be sent.
    */
    'notifyURL': string;
    /**
    * The username to use when accessing the notifyURL.
    */
    'notifyUsername'?: string;
    /**
    * The SSL protocol employed by the endpoint. >Permitted values: `SSL`, `SSLInsecureCiphers`, `TLS`, `TLSv10`, `TLSv10InsecureCiphers`, `TLSv11`, `TLSv12`.
    */
    'sslProtocol'?: NotificationConfigurationDetails.SslProtocolEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "eventConfigs",
            "baseName": "eventConfigs",
            "type": "Array<NotificationEventConfiguration>"
        },
        {
            "name": "hmacSignatureKey",
            "baseName": "hmacSignatureKey",
            "type": "string"
        },
        {
            "name": "notificationId",
            "baseName": "notificationId",
            "type": "number"
        },
        {
            "name": "notifyPassword",
            "baseName": "notifyPassword",
            "type": "string"
        },
        {
            "name": "notifyURL",
            "baseName": "notifyURL",
            "type": "string"
        },
        {
            "name": "notifyUsername",
            "baseName": "notifyUsername",
            "type": "string"
        },
        {
            "name": "sslProtocol",
            "baseName": "sslProtocol",
            "type": "NotificationConfigurationDetails.SslProtocolEnum"
        }    ];

    static getAttributeTypeMap() {
        return NotificationConfigurationDetails.attributeTypeMap;
    }
}

export namespace NotificationConfigurationDetails {
    export enum SslProtocolEnum {
        Ssl = <any> 'SSL',
        SslInsecureCiphers = <any> 'SSLInsecureCiphers',
        Tls = <any> 'TLS',
        Tlsv10 = <any> 'TLSv10',
        Tlsv10InsecureCiphers = <any> 'TLSv10InsecureCiphers',
        Tlsv11 = <any> 'TLSv11',
        Tlsv12 = <any> 'TLSv12'
    }
}
