import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { EqualPasswordsValidator } from '../../validators';
import { UserService } from '../../services/api';

@Component({
  selector: 'registration',
  templateUrl: './registration.html'
})

export class RegistrationComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'passwords': this.fb.group({
        'password': ['', Validators.compose([Validators.required])],
        'confirmPassword': ['', Validators.compose([Validators.required])]
      }, { validator: EqualPasswordsValidator.validate('password', 'confirmPassword')})
    })
  }

  onSubmit(values) {
    let payload = {
      email: values['email'],
      password: values['passwords']['password']
    }
    if (this.form.valid) {
      this.userService.create(payload)
    }
  }
}