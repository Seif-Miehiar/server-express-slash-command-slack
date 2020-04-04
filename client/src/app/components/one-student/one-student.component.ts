import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.scss'],
})
export class OneStudentComponent implements OnInit {
  @Input() student: any;
  constructor() {}

  ngOnInit() {}

  zoomLink() {
    window.open(this.student.zoomLink, '_blank');
  }
}
