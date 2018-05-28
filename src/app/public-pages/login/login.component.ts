import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { SessionService } from '../../services/api';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})

export class LoginComponent {
  form: FormGroup;

  constructor(
    private sessionService: SessionService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    })
  }

  onSubmit(values) {
    if (this.form.valid) {
      this.sessionService.create(values);
    }
  }
}