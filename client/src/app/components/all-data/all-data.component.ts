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
      title: 'Are you sure you want to delete everything?',
      text: "You won't be able to revert this!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete all !!',
    }).then((result) => {
      if (result.value) {
        this._http.deleteAll().subscribe(() => {
          // this.deleteStudent.emit(id);
        });

        Swal.fire({
          title: 'Deleting..',
          timer: 3000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        }).then(() =>
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted!!',
            showConfirmButton: false,
            timer: 1000,
          })
        );
      }
    });
  }

  ngOnDestroy() {
    this.dataSubsecription.unsubscribe();
  }
}
