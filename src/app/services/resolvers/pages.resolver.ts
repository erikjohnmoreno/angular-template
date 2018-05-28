import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorage } from '../utility';

@Injectable()
export class PagesResolver implements CanActivate {
  currentUser: Object;
  constructor(
    private storage: LocalStorage,
    private router: Router
  ) {}

  canActivate() {
    if (this.isEmpty(this.storage.getObject('currentUser'))) {
      this.router.navigate(['']);
    } else {
      return true;
    }
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  } 
}