import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss'],
})
export class AllDataComponent implements OnInit {
  data: any;

  constructor(private _http: ServerService, private http: HttpClient) {}

  ngOnInit() {
    this._http.getData().subscribe((comingData: any) => {
      this.data = comingData;
    });
  }

  emptyAll() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Deleted!!',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
    // .then(() =>
    //   this.http.post('https://server-slash-command-slack.herokuapp.com/', {})
    // );
  }
}
