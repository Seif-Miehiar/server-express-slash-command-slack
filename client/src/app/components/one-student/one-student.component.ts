import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.scss'],
})
export class OneStudentComponent implements OnInit {
  @Input() student: any;
  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  zoomLink() {
    window.open(this.student.zoomLink, '_blank');
  }

  deleteItem(id) {
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
          `https://server-slash-command-slack.herokuapp.com/delete/id/${id}`,
          {}
        )
      );
  }
}
