import { Component, OnInit } from '@angular/core';
import { UserService, SessionService } from '../services/api';
import { LocalStorage } from '../services/utility';

@Component({
  selector: 'pages',
  templateUrl: './pages.html'
})

export class PagesComponent implements OnInit {
  constructor(private userService: UserService,
    private sessionService: SessionService,
  private storage: LocalStorage) {}

  ngOnInit() {
    this.userService.query()
  }

  get email() {
    // let currentUser = this.localStorage.getObject('currentUser');
    // return `${currentUser['first_name']} ${currentUser['last_name']}`;
    return `${this.storage.getObject('currentUser')['user']['email']}`;
  }
  
  logout() {
    this.sessionService.logout();
  }
}