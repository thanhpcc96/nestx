/**
 * rest api interface
 * 项目标准接口
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface EditMenuReq { 
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    slug: string;
    /**
     * 
     */
    group: boolean;
    /**
     * 
     */
    link: string;
    /**
     * 
     */
    order?: number;
    /**
     * 
     */
    externalLink?: string;
    /**
     * 
     */
    blank: boolean;
    /**
     * 
     */
    icon?: string;
    /**
     * 
     */
    badge?: string;
    /**
     * 
     */
    badgeDot?: string;
    /**
     * 
     */
    badgeStatus?: string;
    /**
     * 
     */
    enable: boolean;
    /**
     * 
     */
    expanded: boolean;
    /**
     * 
     */
    acl?: string;
    /**
     * 
     */
    paths?: Array<object>;
    /**
     * 
     */
    parent?: string;
    /**
     * 
     */
    permissions?: Array<object>;
    /**
     * 
     */
    isMenu: boolean;
}

