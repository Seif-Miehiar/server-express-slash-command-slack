import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../../services/server.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.scss'],
})
export class OneStudentComponent implements OnInit {
  @Input() student: any;
  constructor(private _http: ServerService) {}

  ngOnInit() {}

  zoomLink() {
    window.open(this.student.zoomLink, '_blank');
  }

  deleteItem(id) {
    console.log(id);
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
        }).then(() =>
          this._http.deleteItem(id).subscribe(() => console.log(id))
        );
      }
    });
  }
}
