import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get('http://localhost:5000/all');
  }
}
