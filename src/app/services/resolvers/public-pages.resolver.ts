import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorage } from '../utility';

@Injectable()
export class PublicPagesResolver implements CanActivate {
  currentUser: Object;
  constructor(
    private storage: LocalStorage,
    private router: Router
  ) {}

  canActivate() {
    if (this.isEmpty(this.storage.getObject('currentUser'))) {
      return true;
    } else {
      this.router.navigate(['pages'])
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