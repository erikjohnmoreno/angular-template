import { Injectable } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '../utility';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
 private apiEndpoint = `http://localhost:3000/api/v1/sessions`;
 
 constructor(
    private http: HttpService,
    private storage: LocalStorage,
    private router: Router
  ) {}

  create(payload) {
    return this.http.post(this.apiEndpoint, { resource: payload })
      .subscribe(
        res => {
          this.storage.setObject('currentUser', res);
          this.router.navigate(['pages'])
        }
      )
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['']);
  }
}