import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(
      'https://server-slash-command-slack.herokuapp.com/all'
    );
  }
}
