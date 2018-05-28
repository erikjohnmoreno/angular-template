import { Component } from '@angular/core';
import { UserService } from '../../services/api/user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html'
})

export class DashboardComponent {

  constructor(private userService: UserService) {}

  try() {
    let payload = {
      first_name: "65465465465",
      last_name: "marksu"
    }
    this.userService.update(1, payload)
  }
}