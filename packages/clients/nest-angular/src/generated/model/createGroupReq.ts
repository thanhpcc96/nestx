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
export interface CreateGroupReq { 
    /**
     * 
     */
    outid?: number;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    icon?: string;
    /**
     * 
     */
    parent?: string;
    /**
     * 
     */
    paths?: Array<object>;
    /**
     * 
     */
    director?: string;
    /**
     * 
     */
    order?: number;
    /**
     * 
     */
    isRegion?: boolean;
    /**
     * 
     */
    description?: string;
}

