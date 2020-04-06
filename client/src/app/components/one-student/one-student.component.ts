import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.scss'],
})
export class OneStudentComponent implements OnInit {
  @Input() student: any;
  // @Output() deleteStudent = new EventEmitter<number>();

  constructor(private _http: ServerService, private router: Router) {}

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
    }).then((result) => {
      if (result.value) {
        this._http.deleteItem(id).subscribe(() => {
          // this.deleteStudent.emit(id);
        });

        Swal.fire({
          title: 'Deleting..',
          timer: 1500,
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
}
