import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject, Subscription } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private router: Router
  ) {}

  /**
   * method for appending headers that passes to api endpoints
   * @param headers 
   * @param skipAuth additional parameters for api endpoints that no need for authentication 
   */
  createAuthorizationHeader(headers: Headers, skipAuth?: boolean): void {
    headers.append('Content-Type', 'application/json');
    if (!skipAuth) {
      // append more auth headers
      // headers.append('Authorization', this.storage.get('accessToken'));
      // headers.append('UserId', this.storage.get('userId'));
      // headers.append('AccessToken', this.storage.get('accessToken'));
    }
  }

  /**
   * method for querying endpoint
   * @param url 
   * @param skipAuth additional parameters for api endpoints that no need for authentication 
   */
  get(url, skipAuth?: boolean): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url).map(this.extractData)
      .catch(res => {
        return this.commonErrorHandler(res);
      });
  }

  /**
   * method for the post endpoint
   * @param url 
   * @param skipAuth additional parameters for api endpoints that no need for authentication 
   */
  post(url, data, skipAuth?: boolean): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    }).map(this.extractData)
      .catch(res => {
        return this.commonErrorHandler(res);
      });
  }

  /**
   * method for the update endpoint
   * @param url 
   * @param skipAuth additional parameters for api endpoints that no need for authentication 
   */
  patch(url, data, skipAuth?: boolean): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.patch(url, data, {
      headers: headers
    }).map(this.extractData)
      .catch(res => {
        return this.commonErrorHandler(res);
      });
  }

  /**
   * method for the deleting a record
   * @param url 
   * @param skipAuth additional parameters for api endpoints that no need for authentication 
   */
  delete(url, skipAuth?: boolean): any {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    }).map(this.extractData)
      .catch(res => {
        return this.commonErrorHandler(res);
      });
  }

  /**
   * method that returns the jsonify response from api
   * @param response 
   */
  extractData(response: Response) {
    const body = response.json();
    return body || { };
  }

  commonErrorHandler(response: any) {
    // add code for displaying response error
    // toast / swal or anything to notify user
    return Observable.throw(response);
  }
}