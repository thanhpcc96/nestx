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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AccessToken } from '../model/accessToken';
import { InlineResponse200 } from '../model/inlineResponse200';
import { LoginReq } from '../model/loginReq';
import { LoginRes } from '../model/loginRes';
import { RegisterReq } from '../model/registerReq';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param mobile 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authCaptcha(mobile: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public authCaptcha(mobile: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public authCaptcha(mobile: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public authCaptcha(mobile: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (mobile === null || mobile === undefined) {
            throw new Error('Required parameter mobile was null or undefined when calling authCaptcha.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mobile !== undefined && mobile !== null) {
            queryParameters = queryParameters.set('mobile', <any>mobile);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.configuration.basePath}/auth/captcha`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param name 
     * @param payload 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authLogin(name: Array<string>, payload: LoginReq, observe?: 'body', reportProgress?: boolean): Observable<LoginRes>;
    public authLogin(name: Array<string>, payload: LoginReq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoginRes>>;
    public authLogin(name: Array<string>, payload: LoginReq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoginRes>>;
    public authLogin(name: Array<string>, payload: LoginReq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling authLogin.');
        }
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling authLogin.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name) {
            name.forEach((element) => {
                queryParameters = queryParameters.append('name', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<LoginRes>(`${this.configuration.basePath}/auth/login`,
            payload,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authLogout(observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public authLogout(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public authLogout(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public authLogout(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.configuration.basePath}/auth/logout`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param payload 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public authRegister(payload: RegisterReq, observe?: 'body', reportProgress?: boolean): Observable<AccessToken>;
    public authRegister(payload: RegisterReq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AccessToken>>;
    public authRegister(payload: RegisterReq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AccessToken>>;
    public authRegister(payload: RegisterReq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling authRegister.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<AccessToken>(`${this.configuration.basePath}/auth/register`,
            payload,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
