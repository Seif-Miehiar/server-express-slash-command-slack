import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  dataEvent: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(
      'https://server-slash-command-slack.herokuapp.com/all'
    );
  }

  deleteItem(id) {
    return this._http.delete(
      `https://server-slash-command-slack.herokuapp.com/delete/id/${id}`
    );
  }
}
