import { Injectable } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageThreadService {
  private apiEndpoint = `http://localhost:3000/api/v1/message_threads`;
  public threads = [];
  public currentThread;
  constructor(private http: HttpService) {}

  create(payload) {
    return this.http.post(this.apiEndpoint, { resource: payload })
      .subscribe(
        res => {
          this.threads.push(res);
          this.currentThread = res;
        }
      )
  }

  // query(params) {
  //   let build_params = '';
  //   for (var i in params) {
  //     build_params += `${i}=${params[i]}&`;
  //   }
  //   return this.http.get(`${this.apiEndpoint}/?${build_params}`)
  //     .subscribe(
  //       res => {
  //         this.currentThread = res;
  //       }
  //     )
  // }
}