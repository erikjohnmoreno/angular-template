import { Injectable } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '../utility';

@Injectable()
export class UserService {
  private apiEndpoint = `http://localhost:3000/api/v1/users`
  public users = [];
  
  constructor(
    private http: HttpService,
    private storage: LocalStorage
  ) {}

  query() {
    return this.http.get(this.apiEndpoint)
      .subscribe(
        res => {
          this.users = res.collection;
        }
      )
  }

  update(id: number, payload: Object) {
    let url = `${this.apiEndpoint}/${id}`
    return this.http.patch(url, {resource: payload})
      .subscribe(
        res => {

        }
      ) 
  }

  create(payload: Object) {
    return this.http.post(this.apiEndpoint, {resource: payload})
      .subscribe(
        res => {
          this.storage.setObject('currentUser', res);
        }
      )
  }
}