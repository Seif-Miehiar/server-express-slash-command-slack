import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../services/server.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.scss'],
})
export class AllDataComponent implements OnInit, OnDestroy {
  data: any;
  dataSubsecription: Subscription;

  constructor(private _http: ServerService) {
    this.dataSubsecription = _http.dataEvent.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 3000);
  }

  // deleteStudent(event) {
  //   console.log(event);
  // }

  getData() {
    this._http.getData().subscribe((comingData: any) => {
      this._http.dataEvent.next(comingData);
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
    })
      .then((result) => {
        if (result.value) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted!!',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .then(() =>
        this._http.post(
          'https://server-slash-command-slack.herokuapp.com/deleteAll',
          {}
        )
      );
  }

  ngOnDestroy() {
    this.dataSubsecription.unsubscribe();
  }
}
