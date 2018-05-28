import { Injectable } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Observable } from 'rxjs/Observable';
import { Ng2Cable, Broadcaster } from 'ng2-cable';

@Injectable()
export class MessageService {
  private apiEndpoint = `http://localhost:3000/api/v1/messages`;
  public messages = []

  constructor(
    private http: HttpService,
    private ng2cable: Ng2Cable,
    private broadcaster: Broadcaster
  ) {
    this.ng2cable.subscribe('http://localhost:3000/cable', 'ChatChannel');
    this.broadcaster.on<string>('ChatChannel')
      .subscribe(
        res => {
          this.reloadMessages(res['messages']);
        }
      )
  }

  create(payload: Object) {
    return this.http.post(this.apiEndpoint, {resource: payload})
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }

  query() {
    return this.http.get(this.apiEndpoint)
  }

  get(id: number) {
    let url = `${this.apiEndpoint}/${id}`
    return this.http.get(url)
  }

  reloadMessages(messages) {
    this.messages = messages
  }
}