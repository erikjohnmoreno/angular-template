import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, AbstractControl, FormBuilder, Validators
} from '@angular/forms';

import { 
  UserService, MessageService, MessageThreadService 
} from '../../services/api';
import { LocalStorage } from '../../services/utility';
import { throwStatement } from 'babel-types';

@Component({
  selector: 'chat',
  templateUrl: './chat.html'
})

export class ChatComponent implements OnInit {
  form: FormGroup;
  messageForm: FormGroup;
  receiver_id;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private messageThreadService: MessageThreadService,
    private storage: LocalStorage,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      'message': ['']
    })
    this.form = this.fb.group({
      'email': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.userService.query();
  }

  get currentUser() {
    if (!this.isEmpty(this.storage.getObject('currentUser'))) {
      return this.storage.getObject('currentUser');
    } 
  }

  get currentThread() {
    return this.messageThreadService.currentThread;
  }

  get messages() {
    return this.messageService.messages;
  }

  get users() {
    return this.userService.users;
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  } 

  onSubmit(values) {
    if (this.form.valid) {
      this.userService.create(values);
    }
  }

  chat(user) {
    let payload = {
      sender_id: this.storage.getObject('currentUser')['id'],
      receiver_id: user['id']
    }
    this.receiver_id = user['id'];
    this.messageThreadService.create(payload);
  }

  send(values) {
    let payload = {
      sender_id: this.storage.getObject('currentUser')['id'],
      receiver_id: this.receiver_id,
      message: values['message'],
      message_thread_id: this.messageThreadService.currentThread['id']
    }
    this.messageService.create(payload);
    this.messageForm.get('message').setValue('');
  }

  logout() {
    this.storage.clear();
  }
  
}