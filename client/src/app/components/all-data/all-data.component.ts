import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss']
})
export class AllDataComponent implements OnInit {
  data: any;

  constructor(private _http: ServerService) {}

  ngOnInit() {
    this._http.getData().subscribe((comingData: any) => {
      this.data = comingData;
    });
  }
}
